import React from 'react';
import Deskitem from '../DeskItem/Deskitem';
import { CardGrid } from '@vkontakte/vkui';
import { getDesks } from '../../actions/index';
import Context from '../App/context';

const DeskList = () => {
  const { setDesks, desks } = React.useContext(Context);

  React.useEffect(() => {
    getDesks().then(setDesks);
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <Deskitem key={id} id={id}>
          {name}
        </Deskitem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
