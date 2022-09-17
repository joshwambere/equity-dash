import Router from 'next/router'

export const loginRedirect = () => {
  Router.push('/login')
}

export const authRedirect = () => {
  Router.push('/equity')
}

export const homeRedirect = () => {
  Router.push('/')
}
