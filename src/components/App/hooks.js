import React from 'react';
import { panel } from './constants';

export const useDesksState = () => {
  const [desks, setDesks] = React.useState([]);
  const addDesk = (desk) => {
    setDesks([...desks, desk]);
  };

  const removeDesk = (removeId) => {
    setDesks(desks.filter(({ id }) => id !== removeId));
  };
  return { desks, addDesk, removeDesk, setDesks };
};

export const useColumnsState = () => {
  const [columns, setColumns] = React.useState([]);

  const addColumn = (column) => {
    setColumns([...columns, column]);
  };

  const removeColumn = (removeId) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };
  return { columns, addColumn, removeColumn, setColumns };
};

export const useNavState = (desks) => {
  const [activePanel, setActivePanel] = React.useState(panel.desks);
  const [activeDesk, setActiveDesk] = React.useState();

  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };

  const goToDesks = () => {
    setActivePanel(panel.desks);
  };

  return { activePanel, activeDesk, goToColumns, goToDesks };
};

const useCardsState = () => {
  const [cards, setCards] = React.useState([]);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (removeId) => {
    setCards(cards.filter(({ id }) => id !== removeId));
  };
  return { cards, setCards, addCard, removeCard };
};

export const useAppState = () => {
  // Доски
  const desksState = useDesksState();

  // Колоки
  const columnsState = useColumnsState();

  // Навигация
  const navState = useNavState(desksState.desks);

  // Карточки
  const cardsState = useCardsState();

  return {
    ...desksState,
    ...columnsState,
    ...navState,
    ...cardsState,
  };
};
