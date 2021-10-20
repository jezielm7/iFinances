import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'expense' | 'total';
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  margin-right: ${RFValue(16)}px;
  
  border-radius: 6px;
  padding: 18px 23px;
  padding-bottom: ${RFValue(42)}px;
  background-color: ${theme.colors.shape};
  
  ${(props) => props.type === 'total' && css`
    background-color: ${theme.colors.red};
  `};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const Icon = styled(Feather) <TypeProps>`
  font-size: ${RFValue(40)}px;
  
  ${(props) => props.type === 'expense' && css`
    color: ${theme.colors.red};
  `};

  ${(props) => props.type === 'total' && css`
    color: ${theme.colors.shape};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  margin-top: 38px;
  font-size: ${RFValue(32)}px;

  color: ${theme.colors.title};
  font-family: ${theme.fonts.medium};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;

  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};

  ${(props) => props.type === 'total' && css`
    color: ${theme.colors.shape};
  `};
`;

