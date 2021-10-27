import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import HighlightCard from '../../components/HighlightCard';

import TransactionCard,
{ TransactionCardProps } from '../../components/TransactionCard';

import { theme } from '../../global/styles/theme';

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
  LoadContainer,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  total: string;
  lastTransaction: string;
}

interface HighlightData {
  expenses: HighlightProps;
}

function Home() {
  const { navigate } = useNavigation();
  const { signOut, user } = useAuth();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

  const dataKey = '@iFinances:transactions';

  async function loadTransactions() {
    const response = await AsyncStorage.getItem(dataKey);

    const storageTransactions = response ? JSON.parse(response) : [];

    let totalExpense = 0;

    const transactionsFormatted: DataListProps[] = storageTransactions
      .map((item: DataListProps) => {
        totalExpense += Number(item.amount);

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

    const lastTransaction = new Date(Math.max.apply(Math, storageTransactions
      .filter((transaction: DataListProps) => transaction.date)
      .map((transaction: DataListProps) => new Date(transaction.date).getTime())
    ));

    const lastTransactionFormatted =
      `Última saída dia ${lastTransaction.getDate()} de ${lastTransaction
        .toLocaleString('pt-BR', {
          month: 'long',
        })}`

    const finalLastTransactionFormatted =
      totalExpense ? lastTransactionFormatted : 'Nenhuma saída registrada';

    setHighlightData({
      expenses: {
        total: totalExpense.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: finalLastTransactionFormatted,
      },
    });

    setData(transactionsFormatted);
    setLoading(false);
  }

  async function editTransactions(ItemID: DataListProps) {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const getIndex = transactions.findIndex((item: DataListProps) => item.id === ItemID.id);

    navigate('Registrar', {
      id: ItemID.id,
      name: ItemID.name,
      amount: ItemID.amount,
      category: ItemID.category,
    });
  }

  async function deleteTransactions(id: string) {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const getIndex = transactions.findIndex((item: DataListProps) => item.id === id);

    transactions.splice(getIndex, 1);

    await AsyncStorage.setItem(dataKey, JSON.stringify(transactions));
    loadTransactions();
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []));

  return (
    <Container>
      {
        isLoading ?
          <LoadContainer>
            <ActivityIndicator
              color={theme.colors.primary}
              size="large"
            />
          </LoadContainer>
          :
          <>
            <Header>
              <UserWrapper>
                <UserInfo>
                  <Avatar source={{ uri: 'https://github.com/jezielm7.png' }} />

                  <User>
                    <Greeting>Olá, {'\n'}<Username>Jeziel</Username></Greeting>
                  </User>
                </UserInfo>

                <Logout>
                  <Button onPress={signOut}>
                    <Icon name="power" />
                  </Button>
                </Logout>
              </UserWrapper>
            </Header>

            <HighlightCards>
              <HighlightCard
                type="expense"
                title="Total de Despesas"
                amount={highlightData.expenses.total}
                last_transaction={highlightData.expenses.lastTransaction}
              />
            </HighlightCards>

            <Transactions>
              <Title>Transações</Title>

              <TransactionsList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <TransactionCard
                    data={item}
                    updateTransaction={() => editTransactions(item)}
                    deleteTransaction={() => deleteTransactions(item.id)}
                  />
                )}
              />
            </Transactions>
          </>
      }
    </Container>
  );
};

export default Home;
