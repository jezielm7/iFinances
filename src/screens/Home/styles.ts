import { Platform, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { DataListProps } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  
  border-radius: 8px;
`;

export const User = styled.View`
  margin-left: 18px;
`;

export const Greeting = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.regular};
`;

export const Username = styled.Text`
  font-size: ${RFValue(20)}px;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.bold};
`;

export const Logout = styled.View``;

export const Button = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.orange};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  position: absolute;

  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFPercentage(18)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(14)}px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})`

`;
