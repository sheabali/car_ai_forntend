import { baseApi } from "./baseApi";

export const shopOwnerDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query({
      query: () => ({
        url: "/technicians/dashboard",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDashboardOverviewQuery } = shopOwnerDashboardApi;
