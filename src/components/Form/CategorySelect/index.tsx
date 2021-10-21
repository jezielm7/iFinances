import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface CategorySelectProps {
  title: string;
  onPress?: () => void;
}

function CategorySelect({ title, onPress }: CategorySelectProps) {
  const { navigate } = useNavigation();

  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
