import React, { Component } from 'react';

// import Redux related components
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';

// import components
import ImagesGrid from './components/ImagesGrid';
import SearchBar from './components/SearchBar';

// import css
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <section>
          <SearchBar />
          <br />
          <ImagesGrid />
        </section>
      </Provider>
    );
  }
}

export default App;
