import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-native';

import uuid from 'react-native-uuid';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Categories from '../Categories';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import CategorySelect from '../../components/Form/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './styles';
import { DataListProps } from '../Home';

function Register() {
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleOpenModal() {
    setOpenModal(true);
  };

  function handleCloseModal() {
    setOpenModal(false);
  };

  async function handleRegister() {
    const newTransaction = {
      id: String(uuid.v4()),
      name,
      amount,
      category: category.key,
      date: new Date(),
    }

    const dataKey = '@iFinances:transactions';

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      console.log('CurData:', currentData);

      const findIndex = currentData.findIndex((item: DataListProps) => item.id === params?.id);
      console.log('FindIndex:', findIndex);

      if (findIndex >= 0) {
        currentData[findIndex] = newTransaction;
        await AsyncStorage.setItem(dataKey, JSON.stringify(currentData));
      } else {
        const formattedData = [
          ...currentData,
          newTransaction,
        ];
        await AsyncStorage.setItem(dataKey, JSON.stringify(formattedData));
      }

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

  // useEffect(() => {
  //   async function removeAll() {
  //     const dataKey = '@iFinances:transactions';
  //     const data = await AsyncStorage.removeItem(dataKey);
  //     console.log(data);
  //   }

  //   removeAll();
  // }, []);

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
            keyboardType="number-pad"
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
