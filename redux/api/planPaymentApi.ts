/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const planPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlan: builder.query<any, void>({
      query: () => ({
        url: "/plans",
        method: "GET",
      }),
    }),
    getSinglePlan: builder.query<any, string>({
      query: (id) => ({
        url: `/plans/${id}`,
        method: "GET",
      }),
    }),
    createSubscriptionIntent: builder.mutation<any, any>({
      query: (data) => ({
        url: "/payment/create-subscription-intent",
        method: "POST",
        body: data,
      }),
    }),
    paymentConfirmPayment: builder.mutation<any, any>({
      query: ({ planId, data }) => ({
        url: `/payment/confirm-payment/${planId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllPlanQuery,
  useGetSinglePlanQuery,
  useCreateSubscriptionIntentMutation,
  usePaymentConfirmPaymentMutation,
} = planPaymentApi;
