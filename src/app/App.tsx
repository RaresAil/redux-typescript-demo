import React, { Component, ReactElement } from 'react';
import '../styles/App.css';

import List from '../components/list/Controller';

export default class App extends Component {
  render(): ReactElement {
    return (
      <div className="app">
        <List />
      </div>
    );
  }
}
