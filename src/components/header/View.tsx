import React, { Component } from 'react';
import { PropsFromRedux } from './Controller';
import './style.css';

export default class Header extends Component<PropsFromRedux> {
  render () {
    return (
      <div className="header">
        Number of elements: {this.props.list.members.length}
      </div>
    );
  }
}
