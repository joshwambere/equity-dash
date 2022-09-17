import React from 'react'
import { Row, Col, Button, Form, Input } from 'antd'
import Router from 'next/router'
import AuthPageWrapper from '../Auth'
import { routes } from '../../config/route-config'
import { SuccessMessage } from '../Shared/Messages/SuccessMessage'
import { ErrorMessage } from '../Shared/Messages/ErrorMessage'
import { useForgotPasswordMutation } from '../../lib/endpoints/authEndpoints'
import { requiredInput } from '../../lib/validation/InputValidations'
import Link from 'next/link'

const ForgotPassword = (): JSX.Element => {
  const [forgotPassword, { isLoading }]: any = useForgotPasswordMutation()

  const onFinish = (values: any) => {
    forgotPassword({ email: values?.email })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.message)
        Router.replace(routes.resetPasswordCodeSent.url)
      })
      .catch((err: any) => ErrorMessage(err?.data?.errorMessage))
  }

  return (
    <AuthPageWrapper>
      <Form
        style={{ paddingBottom: '1rem' }}
        name="Forgort Password"
        onFinish={onFinish}
        layout="vertical"
        title="">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item label="" name="email" rules={requiredInput}>
              <Input.Password
                className="equity_input bordered_input"
                placeholder="Type your email"
              />
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
              Subimt
            </Button>
          </Col>
        </Row>

        <Row justify="end" className="mt-4">
          <Col>
            <Link href={routes?.login.url}>
              <a className="font-light text-xs underline">Remember password?</a>
            </Link>
          </Col>
        </Row>
      </Form>
    </AuthPageWrapper>
  )
}

export default ForgotPassword
