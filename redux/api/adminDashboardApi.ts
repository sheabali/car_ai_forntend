import { baseApi } from "./baseApi";

export const adminDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
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
  }),
});

export const {
  useGetDashboardOverviewQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = adminDashboardApi;
