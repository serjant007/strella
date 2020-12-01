import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from '@vkontakte/vkui';
import './Deskitem.css';
import { deleteDesk } from '../../actions/index';
import Context from '../App/context';

const Deskitem = ({ id, children }) => {
  const { removeDesk, goToColumns } = useContext(Context);
  const goToColumnPanel = () => goToColumns(id);
  const deleteItem = (event) => {
    event.stopPropagation();
    deleteDesk(id)
      .then(() => removeDesk(id))
      .catch(console.error);
  };

  return (
    <Card size="l" onClick={goToColumnPanel}>
      <Div className="Deskitem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Delete
        </Button>
      </Div>
    </Card>
  );
};

Deskitem.propTypes = {
  id: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
export default Deskitem;
