import { baseApi } from '../api/api'
import { AnalyticsRequest, AnalyticsResponse, UsersAnalyticsRequest } from '../types/analytics'

const analyticsEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Analytics
    userAnalytics: builder.query<AnalyticsResponse, AnalyticsRequest>({
      providesTags: ['Analytics', 'User'],
      query: (dto) => ({
        url: `/analytics/users?dateFrom=${dto?.dateFrom}&dateTo=${dto?.dateTo}`,
        method: 'GET',
      }),
    }),
    investmentsAnalytics: builder.query<AnalyticsResponse, AnalyticsRequest>({
      providesTags: ['Analytics', 'User'],
      query: (dto) => ({
        url: `/analytics/investments?dateFrom=${dto?.dateFrom}&dateTo=${dto?.dateTo}`,
        method: 'GET',
      }),
    }),
    companiesAnalytics: builder.query<AnalyticsResponse, AnalyticsRequest>({
      providesTags: ['Analytics', 'User'],
      query: (dto) => ({
        url: `/analytics/companies?dateFrom=${dto?.dateFrom}&dateTo=${dto?.dateTo}`,
        method: 'GET',
      }),
    }),
    offersAnalytics: builder.query<AnalyticsResponse, void>({
      providesTags: ['Analytics', 'User'],
      query: () => ({
        url: `/analytics/offers`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  //Analytics
  useUserAnalyticsQuery,
  useInvestmentsAnalyticsQuery,
  useCompaniesAnalyticsQuery,
  useOffersAnalyticsQuery,
} = analyticsEndpoints
