import React, { useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { useAuth } from '../../hooks/auth';

import SignInButton from '../../components/SignInButton';

import Logo from '../../assets/icons/logo.svg';
import Google from '../../assets/icons/google.svg';

import { theme } from '../../global/styles/theme';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SubTitle,
  SignInText,
  Footer,
  FooterWrapper,
} from './styles';

function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.blue} />
      <Header>
        <TitleWrapper>
          <Logo
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>iFinances</Title>

          <SubTitle>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </SubTitle>
        </TitleWrapper>

        <SignInText>
          Faça seu login {'\n'}
          para continuar
        </SignInText>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInButton
            title="Entrar com Google"
            svg={Google}
            onPress={handleSignInWithGoogle}
          />
        </FooterWrapper>

        {isLoading &&
          <ActivityIndicator
            style={{ marginTop: 18 }}
            color={theme.colors.shape}
          />
        }
      </Footer>
    </Container>
  );
};

export default SignIn;
