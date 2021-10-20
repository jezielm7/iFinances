import React from 'react';

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

function Home() {
  const data = [
    {
      id: '1',
      title: "Feira do mercado",
      amount: "R$350,00",
      date: "20/10/2021",
      category: {
        name: 'Compras',
        icon: 'shopping-bag',
      },
    },
    {
      id: '2',
      title: "Hamburgueria",
      amount: "R$50,00",
      date: "20/10/2021",
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
    },
    {
      id: '3',
      title: "Aluguel do apartamento",
      amount: "R$700,00",
      date: "20/10/2021",
      category: {
        name: 'Casa',
        icon: 'home',
      },
    },
  ];

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
