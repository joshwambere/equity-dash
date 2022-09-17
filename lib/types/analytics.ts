export interface AnalyticsResponse {
  statusCode: number
  message: string
  payload: any
}

export interface AnalyticsRequest {
  dateFrom: string
  dateTo: string
}

export interface UsersAnalyticsRequest {
  dateFrom: string
  dateTo: string
}
