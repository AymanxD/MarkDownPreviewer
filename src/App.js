import React, { Component } from 'react';
import './App.css';
import Markup from './Markup.jsx';
import Markdown from './Markdown.jsx'

class App extends Component {
  constructor(props){
    super(props);
    // Original state is defined here.
    this.state = {
    data: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
monospace, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    }
  }; 

//State is changed every time the user types in the textarea due to this function
  storeMarkdown(newMarkup){
    this.setState({
      data: newMarkup
    });
  }
  render() {
    return (
      <div className="App container">
        <h1>Simple Markdown Previewer</h1>
        <div className="MarkUpandDown">
          <Markdown storeMarkdown={this.storeMarkdown.bind(this)} data={this.state.data}/>
          <Markup data={this.state.data} />
        </div>
        <h3 className="author">By Ayman Mohatarem</h3>
      </div>
    );
  }
}

export default App;
