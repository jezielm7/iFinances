import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 12px 24px;
  margin-bottom: 10px;

  border-radius: 6px;
  border-left-width: 4px;
  border-left-color: ${({ color }) => color};

  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.shape};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.regular};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.bold};
`;
