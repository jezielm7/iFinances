import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(70)}px;

  padding-bottom: 20px;
  align-items: center;
  justify-content: flex-end;

  background-color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;
