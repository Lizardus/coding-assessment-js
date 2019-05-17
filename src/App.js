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
      <p>
        Scroll down to start loading images
      </p>
    </header>
    <main>
      <ImagesContainer />
    </main>
  </div>;
}

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
