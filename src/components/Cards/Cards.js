import React from 'react';
import PropTypes from 'prop-types';
import ColumnCard from '../ColumnCard/ColumnCard';
import { CardGrid } from '@vkontakte/vkui';
import { getCards } from '../../actions/index';
import CardCreate from '../CardCreate/CardCreate';
import Context from '../App/context';

const Cards = ({ columnId }) => {
  const { cards, setCards } = React.useContext(Context);

  React.useEffect(() => {
    getCards(columnId).then(setCards);
  }, []);

  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard key={id} id={id}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate columnId={columnId} />
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
