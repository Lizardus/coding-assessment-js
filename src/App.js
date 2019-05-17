import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ImagesContainer from './ImagesContainer';

export const App = ({
  message,
  href,
  fetch
}) => {
  fetch && fetch();

  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {message}
      </a>
    </header>
    <main>
      <ImagesContainer />
    </main>
  </div>;
}

// Note: at some point between the previous commit and now the watch
// stopped working but I hadn't noticed so was banging my head wondering why
// nothing seemed hooked up properly. Finally realised and did an actual refresh
// on the page and it all came together here
const mapStateToProps = state => {
  const messageState = state.get('message');
  return { ...messageState };
};

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch({ type: 'fetch' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
