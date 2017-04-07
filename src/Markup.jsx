import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

export default class Markup extends Component {

   createMarkup(){
    return {__html: marked(this.props.data)};
  }

  render() {
    return (
      <div className="Markup">
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}
