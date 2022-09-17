export interface UsersResponse {
  statusCode: number
  message: string
  payload: any
}

export interface SuspendUser {
  id: string
}

export interface ActivateUser {
  id: string
}
