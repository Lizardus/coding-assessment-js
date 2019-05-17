import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {App} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(() => ({}));
  ReactDOM.render(
    <Provider store={store}>
      <App message="test message" />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
