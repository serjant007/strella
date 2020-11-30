import React from 'react';
import { Div, Card, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import './ColumnCard.css';

const ColumnCard = ({ children, id, onDelete }) => {
  const deleteCard = () => {
    const db = firebase.firestore();

    db.collection('cards')
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="column-card__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteCard}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;
