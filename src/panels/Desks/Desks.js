import React, { Fragment } from 'react';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = ({ onChangePanel, addDesk, removeDesk, desks, setDesks }) => {
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>
      <DeskList
        desks={desks}
        onDelete={removeDesk}
        onLoadDesks={setDesks}
        onDeskClick={onChangePanel}
      />
    </Fragment>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
