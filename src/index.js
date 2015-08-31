import './styles.styl';
import React from 'react';
import App from './App';
import { compose, createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { tasks } from './reducers';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

let root = document.getElementById('app');
let store = finalCreateStore(tasks);

React.render(
  <div>
    <Provider store={store}>
      { () => <App /> }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  root);
