/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const adminDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
    }),

    getAllShops: builder.query({
      query: ({ page = 1, limit = 10, category, status }) => ({
        url: "/admin/shops",
        method: "GET",
        params: { page, limit, category, status },
      }),
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/update-profile",
        method: "PUT",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PUT",
        body: data,
      }),
    }),

    getAllPlans: builder.query<
      unknown,
      { page?: number; limit?: number } | void
    >({
      query: (args) => ({
        url: "/plans",
        method: "GET",
        params: { page: args?.page ?? 1, limit: args?.limit ?? 10 },
      }),
    }),
    // adminDashboardApi.ts

    updatePlan: builder.mutation<void, { id: string; body: Partial<any> }>({
      query: ({ id, body }) => ({
        url: `/plans/${id}`, // ← make sure id is destructured HERE
        method: "PATCH",
        body,
      }),
      // invalidatesTags: ["Plans"],
    }),
    getAllSubscriptions: builder.query({
      query: ({ page = 1, limit = 10, category, status }) => ({
        url: "/admin/subscriptions",
        method: "GET",
        params: { page, limit, category, status },
      }),
    }),
  }),
});

export const {
  useGetDashboardOverviewQuery,
  useGetAllShopsQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAllPlansQuery,
  useUpdatePlanMutation,
  useGetAllSubscriptionsQuery,
} = adminDashboardApi;
