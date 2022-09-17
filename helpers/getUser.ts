import jwt_decode from 'jwt-decode'

export const getLoggedInUser = () => {
  let user: any = {}

  try {
    user = jwt_decode(localStorage.getItem('_equity_tkn__') || '{}')
  } catch (error: any) {
    return error?.message
  }

  return {
    user,
  }
}

export const checkGoogleUser = () => {
  let googleUser: any = {}

  try {
    googleUser = jwt_decode(localStorage.getItem('tempUserToken') || '{}')
  } catch (error: any) {
    return error?.message
  }

  return {
    googleUser,
  }
}
