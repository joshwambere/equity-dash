import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Layout } from 'antd'

const { Header, Sider, Content } = Layout

const Private = ({ children }: any) => {
  return (
    <Layout className="app_container">
      <Header className="equity_header">
        <Navbar />
      </Header>
      <Layout>
        <Sider className="equity_sidebar">
          <Sidebar />
        </Sider>
        <Content className="equity_content">{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Private
