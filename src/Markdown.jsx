import React, { Component } from 'react';
import './App.css';

export default class Markdown extends Component {
  render() {
    return (
      <div className="MarkdownInput">
        <input onChange={(e) => {this.props.storeMarkdown(e.target.value)}} />
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}
