'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginSuccess } from '../redux/authSlice';
import { StyledContainer, FormWrapper } from './styledContainer'; // Import StyledContainer and FormWrapper
import Footer from './footer'; // Import Footer
import { Form, Input, Button, Typography, message } from 'antd'; // Import Ant Design components

const { Title } = Typography;

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      dispatch(loginSuccess(data.data)); // Dispatch the login action with user data
      router.push('/dashboard'); // Redirect to the dashboard
    } else {
      setErrorMessage(data.message); // Show error message
      message.error(data.message); // Use antd message for error feedback
    }
  };

  return (
    <StyledContainer>
      <FormWrapper>
        <Title level={2}>Login</Title>
        <Form
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          style={{ maxWidth: 400 }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

          {errorMessage && (
            <Form.Item>
              <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
            </Form.Item>
          )}
        </Form>
      </FormWrapper>
    </StyledContainer>
  );
};

export default LoginPage;
