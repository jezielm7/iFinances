import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HighlightCard from '../../components/HighlightCard';

import TransactionCard,
{ TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Avatar,
  Greeting,
  Username,
  Logout,
  Button,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';
import { Transaction } from '../Register/types';
import { useFocusEffect } from '@react-navigation/native';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

function Home() {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = '@iFinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          category: item.category,
          date,
        }
      });

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []));

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Avatar source={{ uri: 'https://github.com/jezielm7.png' }} />

            <User>
              <Greeting>Olá, {'\n'}<Username>Jeziel</Username></Greeting>
            </User>
          </UserInfo>

          <Logout>
            <Button><Icon name="power" /></Button>
          </Logout>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="expense"
          title="Despesa Diária"
          amount="R$375,00"
          last_transaction="13 de abril"
        />

        <HighlightCard
          type="total"
          title="Total de Despesas"
          amount="R$2.375,00"
          last_transaction="13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Transações</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Home;
