import React, { Component, ReactElement, FormEvent } from 'react';
import { PropsFromRedux } from './Controller';

export default class List extends Component<PropsFromRedux> {
  private onSubmitAdd = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.props.actions.add({ name: this.props.list.inputName });
    this.props.actions.updateInputName('');
  }

  render(): ReactElement {
    return (
      <div className="list">
        <form onSubmit={this.onSubmitAdd}>
          <input
            data-testid="add-input"
            onChange={({ target }) => this.props.actions.updateInputName(target.value)}
            value={this.props.list.inputName}
            type="text"
            placeholder="Input"
          />
          <button data-testid="add-button" type="submit">Add</button>
        </form>

        <div data-testid="list-show" className="list-show">
          {this.props.list.members.map((d, i) => {
            return (
              <form onSubmit={(e) => {
                e.preventDefault();
                this.props.actions.remove(i);
              }} data-testid={`list-item-${d.name.toLowerCase().trim().replace(' ', '-')}`} className="list-item" key={i}>
                <span>{d.name}</span>
                <button type="submit">Remove</button>
              </form>
            );
          })}
        </div>
      </div>
    );
  }
}
