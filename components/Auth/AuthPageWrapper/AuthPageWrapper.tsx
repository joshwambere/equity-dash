import React, { FC } from 'react'

type AuthPageWrapperType = {
  children: React.ReactNode
}

const AuthPageWrapper: FC<AuthPageWrapperType> = ({ children }) => {
  return <div className="bg-[#ffffff] w-96 p-10 rounded">{children}</div>
}

export default AuthPageWrapper
