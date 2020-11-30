import React from 'react';
import { Div, Card, Header, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import './Column.css';
import Cards from '../Cards/Cards';

const Column = ({ name, id, onDelete }) => {
  const deleteColumn = () => {
    const db = firebase.firestore();

    db.collection('columns')
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Div className="column">
      <div className="column__header">
        <Header>{name}</Header>
        <Button mode="destructive" onClick={deleteColumn}>
          Удалить
        </Button>
      </div>
      <Card className="column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Column;
