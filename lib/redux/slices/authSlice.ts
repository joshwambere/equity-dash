import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  status: number
  message: string
  refreshToken: any
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: '',
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { refreshToken },
      }: PayloadAction<{
        refreshToken: string
      }>,
    ) => {
      state.refreshToken = refreshToken
      localStorage.setItem('_equity_tkn__', refreshToken)
    },

    removeCredentials: (state) => {
      state.refreshToken = undefined
      localStorage.removeItem('_equity_tkn__')
    },
  },
})

export const { setCredentials, removeCredentials } = slice.actions
export default slice.reducer
