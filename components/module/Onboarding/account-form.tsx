/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card } from "@/components/ui/card";

import {
  useCreateSubscriptionIntentMutation,
  usePaymentConfirmPaymentMutation,
} from "@/redux/api/planPaymentApi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { BookingAndPaymentForm } from "./StripeFrom";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface Props {
  planId: string;
}

export function AccountForm({ planId }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [createIntent, { isLoading }] = useCreateSubscriptionIntentMutation();
  const [makeConfirmPayment, { isLoading: confirmLoading }] =
    usePaymentConfirmPaymentMutation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Called directly by BookingAndPaymentForm once it has a paymentMethodId
  const onSuccess = useCallback(
    async (paymentMethodId: string) => {
      if (!paymentMethodId) {
        toast.error("Please validate card first");
        return;
      }

      setIsSubmitting(true);

      try {
        const res = await createIntent({ planId }).unwrap();

        if (!res.success) {
          toast.error(res.message ?? "Failed to create payment intent");
          return;
        }

        toast.success(res.message);

        const stripe = await stripePromise;
        if (!stripe) throw new Error("Stripe not loaded");

        const { paymentIntent, error } = await stripe.confirmCardPayment(
          res.data.clientSecret,
          { payment_method: paymentMethodId },
        );

        if (error) {
          toast.error(error.message ?? "Payment failed");
          return;
        }

        const confirmRes = await makeConfirmPayment({
          planId: res.data.orderId,
          data: { paymentIntentId: paymentIntent.id },
        }).unwrap();

        if (confirmRes.success) {
          toast.success(confirmRes.message);
          router.push("/");
        }
      } catch (err: any) {
        // toast.error(err?.data?.message ?? err?.message ?? "Order failed");
      } finally {
        setIsSubmitting(false);
      }
    },
    [planId, createIntent, makeConfirmPayment, router],
  );

  return (
    <Card className="p-6 border-0">
      <h2 className="text-2xl font-bold mb-6">Enter Account Details</h2>

      <Elements stripe={stripePromise}>
        <BookingAndPaymentForm
          onSuccess={onSuccess}
          isSubmitting={isSubmitting || isLoading || confirmLoading}
        />
      </Elements>
    </Card>
  );
}
