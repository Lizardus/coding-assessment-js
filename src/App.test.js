import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import {App} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // Note: Clearly this is not a long term solution but it will do for now
  const store = createStore(() => fromJS({
    message: {},
    images: {},
  }));
  ReactDOM.render(
    <Provider store={store}>
      <App message="test message" />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
