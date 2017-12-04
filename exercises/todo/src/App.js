import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "TODO lista:",
      newTodo: "",
      todos: []
    };
  }

  toggleTodo(index) {
    const todosCopy = this.state.todos.map((item, i) => {
      if (i !== index) return item;

      return {
        text: item.text,
        completed: !item.completed
      }
    })
    this.setState({
      todos: todosCopy
    });
  }

  componentDidUpdate() {
    console.log('New state');
    console.log(this.state);
  }

  inputChanged(text) {
    this.setState({
      newTodo: text
    });
  }

  submit(event) {
    event.preventDefault();
    
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          text: this.state.newTodo,
          completed: false
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>

        <div className="App-intro">
          <form onSubmit={e => this.submit(e)}>
            <input
              onChange={e => this.inputChanged(e.target.value)}
              value={this.state.newTodo}
            />
            <button>Add</button>
          </form>
          <ul>
            {
              this.state.todos.map((item, index) => {
                return <li
                  key={index}
                  className={item.completed ? 'completed' : ''}
                  onClick = {() => this.toggleTodo(index) }
                >
                  {item.text}
                </li>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
