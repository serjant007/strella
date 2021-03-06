import React from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';
import { panel } from './constants';
import Context from './context';
import { useAppState } from './hooks';

const App = () => {
  const state = useAppState();

  return (
    <Context.Provider value={state}>
      <View activePanel={state.activePanel} header={false}>
        <Panel id={panel.desks} separator={false}>
          <Desks />
        </Panel>

        <Panel className="columns" id={panel.columns} separator={false}>
          {state.activeDesk && <Columns />}
        </Panel>
      </View>
    </Context.Provider>
  );
};

export default App;
