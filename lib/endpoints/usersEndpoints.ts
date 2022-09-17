import { baseApi } from '../api/api'
import { ActivateUser, SuspendUser, UsersResponse } from '../types/users'

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
      providesTags: ['User', 'Analytics', 'Suspend'],
      query: (DTO) => ({
        url: `/users/suspend/${DTO?.id}`,
        method: 'GET',
      }),
    }),
    activateUser: builder.query<UsersResponse, ActivateUser>({
      providesTags: ['User', 'Analytics', 'Activate'],
      query: (DTO) => ({
        url: `/users/activate/${DTO?.id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  //Users
  useUsersQuery,
  useLazySuspendUserQuery,
  useLazyActivateUserQuery,
} = usersEndpoints
