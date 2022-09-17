import { baseApi } from '../api/api'
import { SuspendUser, UsersResponse } from '../types/users'

const usersEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Users
    users: builder.query<UsersResponse, void>({
      providesTags: ['User'],
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    suspendUser: builder.query<UsersResponse, SuspendUser>({
      providesTags: ['User', 'Analytics'],
      query: (DTO) => ({
        url: `/users/suspend/${DTO?.id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  //Users
  useUsersQuery,
  useLazySuspendUserQuery,
} = usersEndpoints
