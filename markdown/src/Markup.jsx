import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

export default class Markup extends Component {
  //This is where the resulting html will appear.
   createMarkup(){
    return {__html: marked(this.props.data)};
  }

  render() {
    return (
      <div>
        <h1>Preview</h1>
        <div className="Preview" dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}
