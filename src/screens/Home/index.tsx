import React from 'react';
import HighlightCard from '../../components/HighlightCard';

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
} from './styles';

function Home() {
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


    </Container>
  );
};

export default Home;
