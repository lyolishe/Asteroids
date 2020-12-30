// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { useForm } from 'antd/es/form/Form';
import { Button, Card, Col, Form, Row, Space } from 'antd';
import { SignUpRequest } from '../../types/types';

const RegistrationPage: React.FC = () => {
  const [form] = useForm();

  const handleOk = React.useCallback((values: SignUpRequest) => {
    console.log('succeeded:', values)
  }, [])

  return (
    <Form
      name='basic'
      onFinish={handleOk}
      layout='vertical'
      hideRequiredMark
      form={form}
    >
      <Row>
        <Col span={12} offset={6}>
          <Card title='Регистрация'>
            <RegistrationForm />
            <Space>
              <Button type={'primary'} htmlType={'submit'}>
                Регистрация
              </Button>
              <Link to={'./login'}>
                <Button htmlType={'button'}>
                  Войти
                </Button>
              </Link>
            </Space>
          </Card>
        </Col>
      </Row>
    </Form>
  )
};

// Exports
export default RegistrationPage;