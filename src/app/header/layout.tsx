"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '../auth/redux/authSlice'; // Adjust the path
import { RootState } from '../../redux/store'; // Adjust path for RootState

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth/login'); // Redirect to login after logout
  };

  return (
    <header style={{ padding: '10px 20px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        <span>Welcome, {user?.username || 'User'}</span>
        <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
