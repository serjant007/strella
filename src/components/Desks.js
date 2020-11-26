import React, { Fragment } from 'react';
import { Button, PanelHeaderSimple, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from './DeskList';
import DeskCreate from './DeskCreate';

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = React.useState([]);
  const addDesk = (desk) => {
    setDesks([...desks, desk]);
  };
  const removeDesk = (removeId) => {
    setDesks(desks.filter(({ id }) => id !== removeId));
  };

  return (
    <Fragment>
      <PanelHeaderSimple> Мои доски</PanelHeaderSimple>
      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>
      <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} />

      <Div>
        <Button onClick={onChangePanel}> Go to column</Button>
      </Div>
    </Fragment>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
