import React from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import CreateForm from '../CreateForm/CreateForm';
import { Div } from '@vkontakte/vkui';
import '../Column/Column';

const ColumnCreate = ({ onCreate, deskId }) => {
  const createColumn = (name) => {
    const db = firebase.firestore();

    return db
      .collection('columns')
      .add({ name, deskId })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="column">
      <CreateForm
        onSubmit={createColumn}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
};

export default ColumnCreate;
