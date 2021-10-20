import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 18px 24px;
  margin-bottom: 16px;
  
  border-radius: 6px;
  background-color: ${theme.colors.shape};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const Amount = styled.Text`
  margin-top: 2px;
  font-size: ${RFValue(20)}px;

  color: ${theme.colors.red};
  font-family: ${theme.fonts.regular};
`;

export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.red_light};
`;

export const CategoryName = styled.Text`
  margin-left: 16px;

  font-size: ${RFValue(14)}px;
  color: ${theme.colors.red_light};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
`;
