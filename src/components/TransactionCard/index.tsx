import React from 'react';
import { TouchableOpacity } from 'react-native';

import { categories } from '../../utils/categories';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export interface TransactionCardProps {
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
  updateTransaction?: () => void;
  deleteTransaction?: () => void;
}

function TransactionCard({
  data, updateTransaction, deleteTransaction,
}: Props) {
  const [category] = categories.filter(
    item => item.key === data.category
  );

  return (
    <TouchableOpacity
      onPress={updateTransaction}
      onLongPress={deleteTransaction}
    >
      <Container>
        <Title>{data.name}</Title>

        <Amount>- {data.amount}</Amount>

        <Footer>
          <Category>
            <Icon name={category.icon} />
            <CategoryName>{category.name}</CategoryName>
          </Category>

          <Date>{data.date}</Date>
        </Footer>
      </Container>
    </TouchableOpacity>
  );
};

export default TransactionCard;
