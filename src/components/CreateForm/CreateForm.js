import React from 'react';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import { Button, Card, Div, FormLayout, Input } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

const modes = {
  button: 'button',
  form: 'form',
};

const statuses = {
  default: 'default',
  error: 'error',
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const [mode, setMode] = React.useState(modes.button);
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState(statuses.default);
  const reset = () => {
    setMode(modes.button);
    setStatus(statuses.default);
    setName('');
  };

  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    onSubmit(name).then(reset);
  };

  if (mode === modes.button)
    return (
      <Button onClick={() => setMode(modes.form)} before={<Icon28AddCircleOutline />} size="xl">
        {actionTitle}
      </Button>
    );

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={submit}>
        <Input
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          status={status}
          placeholder={placeholder}
        />
        <Div>
          <Button onClick={submit}>{actionTitle}</Button>
          <Button onClick={reset} mode="tertiary">
            Cancel
          </Button>
        </Div>
      </FormLayout>
    </Card>
  );
};

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actionTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CreateForm;
