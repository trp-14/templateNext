import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height for centering */
  background-color: #f5f5f5; /* Light gray background */
`;

const StyledContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default StyledContainer; // Default export
