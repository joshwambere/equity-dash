import { baseApi } from '../api/api'
import {
  ForgetResponse,
  ForgotRequest,
  LoginRequest,
  LoginResponse,
  ResetRequest,
  ResetResponse,
} from '../types/auth'

const authEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    forgotPassword: builder.mutation<ForgetResponse, ForgotRequest>({
      query: (dto) => ({
        url: `/auth/forgot-password/${dto?.email}`,
        method: 'GET',
      }),
    }),
    resetPassword: builder.mutation<ResetResponse, ResetRequest>({
      query: (resetReq) => ({
        url: `/auth/reset-password/${resetReq?.email}/${resetReq?.token}`,
        method: 'PUT',
        body: {
          password: resetReq?.password,
          confirmPassword: resetReq?.confirmPassword,
        },
      }),
    }),
  }),
})

export const {
  // AUTH
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authEndpoints
