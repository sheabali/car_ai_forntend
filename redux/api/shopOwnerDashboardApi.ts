import { baseApi } from "./baseApi";

export const shopOwnerDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query({
      query: () => ({
        url: "/technicians/dashboard",
        method: "GET",
      }),
    }),
    addTechnician: builder.mutation({
      query: (data) => ({
        url: "/technicians/add",
        method: "POST",
        body: data,
      }),
    }),
    getTechniciansLimitInfo: builder.query({
      query: () => ({
        url: "/technicians/limit-info",
        method: "GET",
      }),
    }),
    getTechniciansManagementStats: builder.query({
      query: () => ({
        url: "/technicians/management-stats",
        method: "GET",
      }),
    }),
    billingManagement: builder.query({
      query: () => ({
        url: "/billing/management",
        method: "GET",
      }),
    }),
    UpdateTechnicianStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/technicians/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
    getBillingData: builder.query({
      query: () => ({
        url: "/payment/my-payments",
        method: "GET",
      }),
    }),
    getMySubscriptions: builder.query({
      query: () => ({
        url: "/payment/my-subscriptions",
        method: "GET",
      }),
    }),
    updateAutoRenew: builder.mutation({
      query: ({ subscriptionId, value }) => ({
        url: `/payment/subscription/${subscriptionId}/${value}`,
        method: "PATCH",
        body: { value },
      }),
    }),
  }),
});

export const {
  useGetDashboardOverviewQuery,
  useAddTechnicianMutation,
  useGetTechniciansLimitInfoQuery,
  useGetTechniciansManagementStatsQuery,
  useBillingManagementQuery,
  useUpdateTechnicianStatusMutation,
  useGetBillingDataQuery,
  useUpdateAutoRenewMutation,
  useGetMySubscriptionsQuery,
} = shopOwnerDashboardApi;
