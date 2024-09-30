// src/app/dashboard/dashboardContent.tsx
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the import path as needed
import { logout } from '../redux/authSlice';
import { useRouter } from 'next/navigation';

const DashboardContent = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Move useRouter here
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // Navigate back to the login page
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <p>Your token: {user.token}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
};

export default DashboardContent;
