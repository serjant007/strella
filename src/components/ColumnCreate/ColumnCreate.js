import React from 'react';
import CreateForm from '../CreateForm/CreateForm';
import { Div } from '@vkontakte/vkui';
import { createColumn } from '../../actions/index';
import Context from '../../components/App/context';
import '../Column/Column';

const ColumnCreate = () => {
  const { addColumn, activeDesk } = React.useContext(Context);

  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="column">
      <CreateForm
        onSubmit={createItem}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

export default ColumnCreate;
