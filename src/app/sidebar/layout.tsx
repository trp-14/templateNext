"use client";

import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#333', color: '#fff', padding: '20px', height: '100vh' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link href="/home/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
              Dashboard Home
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link href="/dashboard/settings" style={{ color: '#fff', textDecoration: 'none' }}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
