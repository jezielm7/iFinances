import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  align-items: center;
  justify-content: flex-end;
  
  background-color: ${theme.colors.blue};
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 5px;
  text-align: center;
  color:${theme.colors.shape};

  font-size: ${RFValue(30)}px;
  font-family: ${theme.fonts.medium};
`;

export const SubTitle = styled.Text`
  margin-top: 25px;
  text-align: center;

  color:${theme.colors.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${theme.fonts.medium};
`;

export const SignInText = styled.Text`
  margin-top: 60px;
  margin-bottom: 67px;

  text-align: center;
  color:${theme.colors.shape};
  
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.regular};
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color:${theme.colors.orange}; 
`;

export const FooterWrapper = styled.View`
  padding: 0 32px;
  justify-content: space-between;

  margin-top: ${RFPercentage(-4)}px;
`;