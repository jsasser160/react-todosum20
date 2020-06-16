import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [
    { id: 1, todosName: 'Learn Rails', complete: true },
    { id: 2, todosName: 'Learn ReactJS', complete: false },
    { id: 3, todosName: 'Graduate', complete: false },
  ]}

  getUnigId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .toString(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = {...incomingTodo, id: this.getUnigId() }
    this.setState({ todos: [newTodo, ...todos] })
  }
  // allTodos = () => {
  //   // const todos = this.state.todos
  //   const { todos } = this.state
  //   return todos.map( t => {
  //     return (
  //       <li key={t.id}>{t.todosName}</li>
  //     )
  //   })
  // }
  render() {
    const { todos } = this.state
    return(
      <div>
        <ul>
         {/* { this.allTodos() }  */}
         <TodoForm addTodo={this.addTodo} />
         <List title='DPL' todos={todos} />
        </ul>
      </div>
    )
  }
}
export default App;
