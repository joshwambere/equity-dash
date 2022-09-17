import { FC } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { Button } from 'antd'

const Navbar: FC = () => {
  return (
    <Row justify="space-between" style={{ height: '100%', alignItems: 'center' }}>
      <Col flex="none">LOGO</Col>
      <Col>
        <Button className="btn_outlined_blue">Logout</Button>
      </Col>
    </Row>
  )
}

export default Navbar
