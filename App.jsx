import React from "react";
import TodoItem from "./TodoItem";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div id="container">
        <img src="https://imgur.com/8yQpdVB.png"/>
        <br/>
        <input id="enterText" type="text" onChange={this.onChange} />
        &nbsp;
        <button onClick={this.onClickAdd}><strong>ADD</strong></button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} />
        ))}
      </div>
    );
  }
}

export default App;
