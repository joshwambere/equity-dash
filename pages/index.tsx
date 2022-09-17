import React from 'react'
import Login from '../components/Forms/Login'
import WithPublicRoute from '../components/Shared/WithPublicRoute'

const Home = () => {
  return (
    <div className="bg-[#9b0909] h-screen flex justify-center items-center">
      <Login />
    </div>
  )
}

export default WithPublicRoute(Home)
