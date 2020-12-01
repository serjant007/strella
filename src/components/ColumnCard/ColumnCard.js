import React from 'react';
import { Div, Card, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import { deleteCard } from '../../actions';
import Context from '../App/context';
import './ColumnCard.css';

const ColumnCard = ({ children, id }) => {
  const { removeCard } = React.useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="column-card__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColumnCard;
