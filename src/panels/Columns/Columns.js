import React, { Fragment } from 'react';
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import Column from '../../components/Column/Column';
import './Columns.css';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions/index';
import Context from '../../components/App/context';

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = React.useContext(Context);

  React.useEffect(() => {
    getColumns(activeDesk.id).then(setColumns);
  }, []);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>
        {activeDesk.name}
      </PanelHeaderSimple>

      <Gallery slideWidth="100%" align="center" className="card__list">
        {columns.map(({ id, name }) => (
          <Column key={id} name={name} id={id} />
        ))}
        <ColumnCreate deskId={activeDesk.id} />
      </Gallery>
    </Fragment>
  );
};

export default Columns;
