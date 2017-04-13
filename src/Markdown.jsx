import React, { Component } from 'react';
import './App.css';

export default class Markdown extends Component {
  /*storeMarkdown function is activated as soon as the user types anything within the textarea.
  This causes a change in the Markup text. */
  render() {
    return (
      <div>
        <h1>Markdown</h1>
        <textarea className="input" rows="22" cols="40" onChange={(e) => {this.props.storeMarkdown(e.target.value)}} value={this.props.data} />
      </div>
    );
  }
}
