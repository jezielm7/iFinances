import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 18px;

  align-items: center;

  border-radius: 6px;
  background-color: ${theme.colors.red};
`;

export const Title = styled.Text`
  color: ${theme.colors.shape};
  
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.medium};
`;
