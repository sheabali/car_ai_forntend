/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";

export const subscriptionPlans = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (credentials: any) => ({
        url: "/plans",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    getAllSubscription: builder.query({
      query: () => ({
        url: "/plans",
        method: "GET",
      }),
    }),
    createSubscriptionIntent: builder.mutation({
      query: (payload: any) => ({
        url: "/payment/create-subscription-intent",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllSubscriptionQuery,
  useCreateSubscriptionIntentMutation,
} = subscriptionPlans;
