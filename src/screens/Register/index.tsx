import React, { useState } from 'react';
import { Modal } from 'react-native';

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

function Register() {
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

  return (
    <Container>
      <Header>
        <Title>Registro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="Preço"
          />

          <CategorySelect
            title={category.name}
            onPress={handleOpenModal}
          />
        </Fields>

        <Button title="Enviar" />
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
