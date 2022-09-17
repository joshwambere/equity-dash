import { FC } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { removeCredentials } from '../../../lib/redux/slices/authSlice'
import Router from 'next/router'
import { routes } from '../../../config/route-config'

const Navbar: FC = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(removeCredentials())
    Router.reload()
    Router.replace(routes.login.url)
  }

  return (
    <Row justify="space-between" style={{ height: '100%', alignItems: 'center' }}>
      <Col flex="none">LOGO</Col>
      <Col>
        <Button onClick={logout} className="btn_outlined_blue">
          Logout
        </Button>
      </Col>
    </Row>
  )
}

export default Navbar
