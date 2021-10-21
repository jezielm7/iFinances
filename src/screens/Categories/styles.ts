import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(70)}px;

  align-items: center;
  justify-content: flex-end;
  
  padding-bottom: 20px;
  background-color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${theme.colors.shape};
  
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const Category = styled(RectButton) <CategoryProps>`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive }) =>
    isActive ? theme.colors.highlight : theme.colors.background
  };
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
  font-size: ${RFValue(20)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  background-color: ${theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
