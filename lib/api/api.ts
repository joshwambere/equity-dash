import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from '../../config/constants'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      const localToken = localStorage.getItem('_equity_tkn__')
      if (localToken) headers.set('authorization', `Bearer ${localToken}`)
      return headers
    },
  }),
  tagTypes: ['Auth', 'Analytics', 'User', 'Suspend', 'Activate'],
  endpoints: () => ({}),
})
