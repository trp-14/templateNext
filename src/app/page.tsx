import React from 'react';
import { redirect } from 'next/navigation';

const HomePage: React.FC = () => {
  // Redirect to the login page on load
  redirect('/auth/login');
  return null; // or some loading indicator
};

export default HomePage;