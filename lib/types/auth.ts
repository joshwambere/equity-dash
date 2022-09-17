export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  status: number
  message: string
  data: any
}

export interface ForgotRequest {
  email: string
}

export interface ResetRequest {
  password: string
  confirmPassword: string
  token: string
  email: string
}

export interface ForgetResponse {
  status: number
  message: string
}

export interface ResetResponse {
  payload: any
  message: string
}
