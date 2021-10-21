import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  padding: 18px 16px;
  border-radius: 5px;
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.shape};
`;

export const Category = styled.Text`
  color: ${theme.colors.text};

  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text};
`;

