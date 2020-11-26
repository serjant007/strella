import React from 'react';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import { Button, Card, Div, FormLayout, Input } from '@vkontakte/vkui';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';

const modes = {
  button: 'button',
  form: 'form',
};

const statuses = {
  default: 'default',
  error: 'error',
};

const DeskCreate = ({ onCreate }) => {
  const [mode, setMode] = React.useState(modes.form);
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState(statuses.default);
  const reset = () => {
    setMode(modes.button);
    setStatus(statuses.default);
    setName('');
  };

  const createDesk = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    const db = firebase.firestore();

    db.collection('desks')
      .add({ name })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .then(reset())
      .catch(console.error);
  };

  if (mode === modes.button)
    return (
      <Button onClick={() => setMode(modes.form)} before={<Icon28AddCircleOutline />} size="xl">
        Create desk
      </Button>
    );

  return (
    <Card size="l" mode="outline">
      <FormLayout onSubmit={createDesk}>
        <Input
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          status={status}
          placeholder="Add desks name"
        />
        <Div>
          <Button onClick={createDesk}>Create desk</Button>
          <Button onClick={reset} mode="tertiary">
            Cancel
          </Button>
        </Div>
      </FormLayout>
    </Card>
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
