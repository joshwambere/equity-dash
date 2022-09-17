import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { passwordValidation } from '../../lib/validation/InputValidations'
import { routes } from '../../config/route-config'
import AuthPageWrapper from '../Auth'
import { SuccessMessage } from '../Shared/Messages/SuccessMessage'
import { ErrorMessage } from '../Shared/Messages/ErrorMessage'
import { setCredentials } from '../../lib/redux/slices/authSlice'
import { useLoginMutation } from '../../lib/endpoints/authEndpoints'

const Login = (): JSX.Element => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [login, { isLoading }]: any = useLoginMutation()

  const onFinish = (values: any) => {
    login({ email: values?.email, password: values.password })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.message)

        if (res?.tokens) {
          dispatch(setCredentials(res?.tokens?.refreshToken))
        }
        router.push(routes.dashboard.url)
      })
      .catch((err: any) => ErrorMessage(err?.data?.errorMessage))
  }

  return (
    <AuthPageWrapper>
      <Form
        style={{ paddingBottom: '1rem' }}
        name="Login"
        onFinish={onFinish}
        layout="vertical"
        title="Login">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item label="" name="email" rules={passwordValidation}>
              <Input className="equity_input bordered_input" placeholder="Type your username" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item label="" name="password" rules={passwordValidation}>
              <Input.Password className="equity_input" placeholder="Type your password" />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mabo32">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="btn_dark_red btn_full rounded">
              Sign in
            </Button>
          </Col>
        </Row>

        <Row justify="end" className="mt-4">
          <Col>
            <Link href={routes.forgotPassword.url}>
              <a className="font-light text-xs underline">Forgot Password ?</a>
            </Link>
          </Col>
        </Row>
      </Form>
    </AuthPageWrapper>
  )
}

export default Login
