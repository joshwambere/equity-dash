import React from 'react'
import PrivateLayout from '../../components/Shared/Layout/Private'
import { SmallSpinLoader } from '../../components/Shared/Loaders'
import { TagsWrapper } from '../../components/Shared/MetaTags/TagsWrapper'
import WithPrivateRoute from '../../components/Shared/WithPrivateRoute'
import UsersTable from '../../components/Tables/Users'
import { useUsersQuery } from '../../lib/endpoints/usersEndpoints'

const Users = (): JSX.Element => {
  const { data: users, isLoading: usersLoading, isFetching: usersFetching } = useUsersQuery()

  return (
    <PrivateLayout>
      <TagsWrapper title="Users" />

      <div className="equity_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          {usersLoading ? (
            <div className="h-full w-full flex justify-center items-center">
              <SmallSpinLoader />
            </div>
          ) : (
            <UsersTable users={users} usersFetching={usersFetching} />
          )}
        </div>
      </div>
    </PrivateLayout>
  )
}

export default WithPrivateRoute(Users)
