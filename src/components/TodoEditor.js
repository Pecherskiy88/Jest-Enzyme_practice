import React, { Component } from 'react';

class TodoEditor extends Component {
  state = {
    text: '',
  };

  textChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  };

  submitHandler = (e) => {
    const { text } = this.state;
    e.preventDefault();

    this.props.onSave(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={text} onChange={this.textChangeHandler} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default TodoEditor;
