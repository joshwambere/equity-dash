import { Avatar, Button, Table } from 'antd'
import moment from 'moment'
import React from 'react'
import { abbreviator } from '../../helpers/abbreviator'
import { useLazySuspendUserQuery } from '../../lib/endpoints/usersEndpoints'

const UsersTable = ({ users }: any) => {
  const [suspendUser, { isLoading }] = useLazySuspendUserQuery()

  const handleSuspend = (id: any) => {
    suspendUser({ id: id })
  }

  const ShortlistColumns: any = [
    {
      title: (
        <Avatar
          style={{
            backgroundColor: '#dfeef5',
            border: '1px solid #35A8DF',
          }}
          className="cursor-pointer">
          <span className="text-black">#</span>
        </Avatar>
      ),
      key: 'pic',
      width: '30px',
      render: (record: any) => (
        <Avatar
          style={{
            backgroundColor: '#dfeef5',
            border: `1px solid ${record?.decision === 'Rejected' ? '#e9432f' : '#35A8DF'}`,
          }}
          className="cursor-pointer">
          <span
            className={`uppercase ${
              record?.decision === 'Rejected' ? 'red_text' : 'text-black'
            }  font-bold`}>
            {record?.name && abbreviator(record?.name)}
          </span>
        </Avatar>
      ),
    },
    {
      title: 'Names & Reg date',
      key: 'Names',
      render: (record: any) => (
        <div className={`flex flex-col ${record?.decision === 'Rejected' && 'red_text'}`}>
          <span>{record?.name}</span>
          <span className="opacity-80 italic text-xs">
            Registered on: {record?.createdAt && moment(record?.createdAt).format('ll')}
          </span>
        </div>
      ),
    },
    {
      title: 'Email',
      key: 'email',
      render: (record: any) => (
        <div className={`flex flex-col ${record?.decision === 'Rejected' && 'red_text'}`}>
          <span>{record?.email}</span>
        </div>
      ),
    },
    {
      title: 'Role / Last update',
      key: 'update',
      render: (record: any) => (
        <div className={`flex flex-col ${record?.decision === 'Rejected' && 'red_text'}`}>
          <span>{record?.role_id?.name}</span>
          <span className="opacity-80 italic text-xs">
            {record?.updatedAt && moment(record?.updatedAt).format('ll')}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex justify-end">
          <span>Action</span>
        </div>
      ),
      key: 'action',
      render: (record: any) => (
        <div className="flex justify-end">
          <div className="flex flex-col w-fit">
            <Button loading={isLoading} onClick={() => handleSuspend(record?.id)} className="">
              Actvate
            </Button>
          </div>
        </div>
      ),
    },
  ]
  return (
    <>
      <Table columns={ShortlistColumns} dataSource={users} />
    </>
  )
}

export default UsersTable
