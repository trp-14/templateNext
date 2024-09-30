"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import CorporateCard from '../components/card'; // Import the card component
import { RootState } from '../../../redux/store'; // Adjust import path

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5; /* Light background for the page */
`;

const cardData = [
  { title: 'Finance Overview', description: 'Keep track of financial performance', key: 1 },
  { title: 'Team Management', description: 'Manage your team effectively', key: 2 },
  { title: 'Project Insights', description: 'Track project progress and deadlines', key: 3 },
  { title: 'Client Engagement', description: 'Engage with clients efficiently', key: 4 },
];

const DashboardHomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user); // Get user data from Redux

  return (
    <StyledContainer>
      {/* <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
        Welcome to Your Corporate Dashboard
      </h1> */}

      {user ? (
        <div>
          <h2>Welcome to the Dashboard, {user.username}</h2>
          <p>Token: {user.token}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}

      <Row gutter={[16, 16]} justify="center">
        {cardData.map((card) => (
          <Col xs={24} sm={12} lg={6} key={card.key}>
            <CorporateCard title={card.title} description={card.description} /> {/* Render CorporateCard component */}
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default DashboardHomePage;
