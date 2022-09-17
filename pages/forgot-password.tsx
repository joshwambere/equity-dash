import React from 'react'
import ForgotPasswordComponent from '../components/Forms/ForgotPassword'
import { TagsWrapper } from '../components/Shared/MetaTags/TagsWrapper'
import WithPublicRoute from '../components/Shared/WithPublicRoute'

const ForgotPassword = () => {
  return (
    <>
      <TagsWrapper title="Password reset options" />
      <div className="bg-[#9b0909] h-screen flex justify-center items-center">
        <ForgotPasswordComponent />
      </div>
    </>
  )
}

export default WithPublicRoute(ForgotPassword)
