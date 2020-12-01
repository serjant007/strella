import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import bridge from '@vkontakte/vk-bridge';
import App from './components/App/App';
import { initialize } from './actions/index';
// bridge.send('VKWebAppInit');

initialize();

ReactDOM.render(<App />, document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
  import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
