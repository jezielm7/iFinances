import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const Button = styled(RectButton)`
  border-radius: 5px;
  margin-bottom: 16px;
  height: ${RFValue(56)}px;

  align-items: center;
  flex-direction: row;
  
  background-color: ${theme.colors.shape};
`;

export const ImageContainer = styled.View`
  height: 100%;
  padding: ${RFValue(16)}px;
  
  align-items: center;
  justify-content: center;

  border-right-width: 1px;
  border-color: ${theme.colors.background};
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.medium};
`;