import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Categories from '../Categories';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import CategorySelect from '../../components/Form/CategorySelect';

import { Transaction } from './types';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './styles';

function Register() {
  const { navigate } = useNavigation();

  const [data, setData] = useState<Transaction[]>([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const dataKey = '@iFinances:transactions';

  function handleOpenModal() {
    setOpenModal(true);
  };

  function handleCloseModal() {
    setOpenModal(false);
  };

  async function handleRegister() {
    const newTransaction = {
      name,
      amount,
      category: category.key,
      date: new Date(),
    }

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction,
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setName('');
      setAmount('');

      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível registrar!');
    }
  }

  return (
    <Container>
      <Header>
        <Title>Registro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            value={name}
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
          />

          <Input
            value={amount}
            placeholder="Preço"
            onChangeText={(text) => setAmount(text)}
          />

          <CategorySelect
            title={category.name}
            onPress={handleOpenModal}
          />
        </Fields>

        <Button
          title="Enviar"
          onPress={handleRegister}
        />
      </Form>

      <Modal visible={openModal}>
        <Categories
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>

    </Container>
  );
};

export default Register;
