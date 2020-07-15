import React, { Component } from 'react';

import TodoEditor from './TodoEditor';
import TodosList from './TodosList';

class App extends Component {
  state = { todos: [] };

  saveTodo = (todo) => {
    this.setState((prev) => ({
      todos: [...prev.todos, todo],
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <TodoEditor onSave={this.saveTodo} />
        {todos.length > 0 && <TodosList items={todos} />}
      </div>
    );
  }
}

export default App;
