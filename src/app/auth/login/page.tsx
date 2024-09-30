// src/app/auth/pages/login.tsx

"use client"; // Make this a client component as it uses hooks

import React from 'react';
import LoginForm from '../components/loginForm';
import StyledContainer from '../components/styledContainer';

const LoginPage: React.FC = () => {
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
};

export default LoginPage;
