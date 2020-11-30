import React, { useState } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';

const panel = {
  desks: 'desks',
  columns: 'columns',
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState();

  const gotoColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };

  const gotoDesks = () => {
    setActivePanel(panel.desks);
  };

  // Доски
  const [desks, setDesks] = React.useState([]);
  const addDesk = (desk) => {
    setDesks([...desks, desk]);
  };
  const removeDesk = (removeId) => {
    setDesks(desks.filter(({ id }) => id !== removeId));
  };

  // Колоки

  const [columns, setColumns] = React.useState([]);

  const addColumn = (column) => {
    setColumns([...columns, column]);
  };

  const removeColumn = (removeId) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };

  return (
    <View activePanel={activePanel} header={false}>
      <Panel id={panel.desks} separator={false}>
        <Desks
          onChangePanel={gotoColumns}
          setDesks={setDesks}
          addDesk={addDesk}
          removeDesk={removeDesk}
          desks={desks}
        />
      </Panel>

      <Panel className="columns" id={panel.columns} separator={false}>
        {activeDesk && (
          <Columns
            desk={activeDesk}
            goBack={gotoDesks}
            addColumn={addColumn}
            columns={columns}
            removeColumn={removeColumn}
            setColumns={setColumns}
          />
        )}
      </Panel>
    </View>
  );
};

export default App;
