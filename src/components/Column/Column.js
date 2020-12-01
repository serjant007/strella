import React from 'react';
import { Div, Card, Header, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './Column.css';
import Cards from '../Cards/Cards';
import { deleteColumn } from '../../actions/index';
import Context from '../../components/App/context';

const Column = ({ name, id }) => {
  const { removeColumn } = React.useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  return (
    <Div className="column">
      <div className="column__header">
        <Header>{name}</Header>
        <Button mode="destructive" onClick={deleteItem}>
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
};

export default Column;
