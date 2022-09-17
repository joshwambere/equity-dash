import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  refreshToken: string | undefined
  resetToken: string | undefined
  verifyToken: string | undefined
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: undefined,
    resetToken: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { refreshToken } }: PayloadAction<{ refreshToken: string }>,
    ) => {
      state.refreshToken = refreshToken
      localStorage.setItem('_equity_tkn__', refreshToken)
    },
    tokenUpdated: (state) => {
      return state
    },
    setResetPasswordToken: (
      state,
      { payload: { resetToken } }: PayloadAction<{ resetToken: string }>,
    ) => {
      state.resetToken = resetToken
    },
    setVerificationToken: (
      state,
      { payload: { verifyToken } }: PayloadAction<{ verifyToken: string }>,
    ) => {
      state.verifyToken = verifyToken
    },
    removeCredentials: (state) => {
      state.refreshToken = undefined
      localStorage.removeItem('_equity_tkn__')
    },
  },
})

export const {
  setCredentials,
  tokenUpdated,
  setResetPasswordToken,
  setVerificationToken,
  removeCredentials,
} = slice.actions
export default slice.reducer
