import React, { Component } from 'react';
import './App.css';
import Markup from './Markup.jsx';
import Markdown from './Markdown.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    data: "hello"
    }
  };


  storeMarkdown(newMarkup){
    this.setState({
      data: newMarkup
    });
  }
  render() {
    return (
      <div className="App">
        <Markdown storeMarkdown={this.storeMarkdown.bind(this)} data={this.state.data}/>
        <Markup data={this.state.data} />
      </div>
    );
  }
}

export default App;
