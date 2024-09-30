// src/app/auth/components/loginForm.tsx

"use client"; // Mark this as a client component

import React, { useState } from 'react';
import { Input, Button } from 'antd'; // Ant Design components
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import { loginSuccess } from '../redux/authSlice'; // Adjust the import path as necessary

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleLogin = async () => {
    try {
      const res = await fetch('/auth/api/login', { // Use the correct API path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
  
      const data = await res.json();
      console.log('Response data:', data);
  
      if (data.success) {
        dispatch(loginSuccess(data.data)); // Dispatch login success action
        router.push('/home/dashboard'); // Redirect to the dashboard
      } else {
        setErrorMessage(data.message); // Show error message if login fails
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };
  

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px' }}
        disabled={loading} // Disable input when loading
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px' }}
        disabled={loading} // Disable input when loading
      />
      <Button
        type="primary"
        onClick={handleLogin}
        style={{ width: '100%' }}
        loading={loading} // Show loading spinner on the button
      >
        Login
      </Button>
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
