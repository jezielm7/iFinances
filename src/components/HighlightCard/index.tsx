import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface HighlightCardProps {
  title: string;
  amount: string;
  last_transaction: string;
  type: 'expense' | 'total';
}

const icon = {
  expense: 'arrow-down-circle',
  total: 'dollar-sign',
}

function HighlightCard({ title, amount, last_transaction, type }: HighlightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction type={type}>{last_transaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
