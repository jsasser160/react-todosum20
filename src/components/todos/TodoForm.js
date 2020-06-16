import React, { Component } from 'react';

class TodoForm extends Component {
  state = { todosName: '', complete: false }
  // changing the state to what the user types
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // add it to the arr
    this.props.addTodo(this.state)
    // reset form
    this.setState({ todosName: '' })
    // this.setState({ todosName: '' })
  }
  render() {
    const { todosName } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          name="todosName"
          value={todosName}
          onChange={this.handleChange}
          required
        />
        <input type='submit' />
      </form>
    )
  }
}
export default TodoForm;