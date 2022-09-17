export type ApiResponseMetadata<T> = {
  statusCode: number
  message?: string
  payload?: T | undefined
}
