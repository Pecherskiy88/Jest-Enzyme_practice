// it
// expect
// beforeEach
// afterEach
// describe
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import TodoEditor from '../components/TodoEditor';
import TodosList from '../components/TodosList';

describe('App component', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('renders a TodoEditor', () => {
    expect(wrapped.find(TodoEditor).length).toEqual(1);
  });

  // - mock App
  // - set State to todos: []
  // - expect to find 0 TodoList
  it('does not render a TodoList when there are no todos', () => {
    wrapped.setState({
      todos: [],
    });

    expect(wrapped.find(TodosList).length).toBe(0);
  });

  // Renders a TodoList when there is at least one todo

  // - mock App
  // - set state to todos: ['first todo']
  // - expect to find 1 TodoList

  it('renders a TodoList when there is at least one todo', () => {
    wrapped.setState({
      todos: ['first todo'],
    });

    expect(wrapped.find(TodosList).length).toBe(1);
  });
});
