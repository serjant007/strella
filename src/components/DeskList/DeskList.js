import React from 'react';
import Deskitem from '../DeskItem/Deskitem';
import { CardGrid } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const DeskList = ({ desks, onDelete, onLoadDesks, onDeskClick }) => {
  React.useEffect(() => {
    const db = firebase.firestore();

    db.collection('desks')
      .get()
      .then((querySnapshot) => {
        const desks = [];

        querySnapshot.forEach((doc) => {
          desks.push({ id: doc.id, name: doc.data().name });
        });
        onLoadDesks(desks);
      });
  }, []);

  if (!desks.length) {
    return null;
  }
  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <Deskitem onClick={() => onDeskClick(id)} key={id} id={id} onDelete={onDelete}>
          {name}
        </Deskitem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
