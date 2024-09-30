import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

// Styled version of the Ant Design Card
const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  .ant-card-head {
    background-color: #001529; /* Corporate dark color for header */
    color: white;
    border-bottom: none;
  }
  .ant-card-body {
    font-size: 1rem;
    color: #595959;
  }
`;

interface CorporateCardProps {
  title: string;
  description: string;
}

const CorporateCard: React.FC<CorporateCardProps> = ({ title, description }) => {
  return (
    <StyledCard title={title}>
      <Meta description={description} />
    </StyledCard>
  );
};

export default CorporateCard;
