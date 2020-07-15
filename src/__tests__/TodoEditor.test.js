import React from 'react';
import { shallow } from 'enzyme';
import TodoEditor from '../components/TodoEditor';

describe('TodoEditor', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<TodoEditor />);
  });

  // ---renders an input and a button
  // - mock TodoEditor
  // - expect to find 1 input[type="text"]
  // - expect to find 1 button[type="submit"]
  it('renders an input and a button', () => {
    expect(wrapped.find('input[type="text"]').length).toBe(1);
    expect(wrapped.find('button[type="submit"]').length).toBe(1);
  });

  describe('Events', () => {
    const todoText = 'new todo text';
    beforeEach(() => {
      const changeEventMock = {
        target: {
          value: todoText,
        },
      };
      wrapped.find('input[type="text"]').simulate('change', changeEventMock);
      wrapped.update();
    });
    // --- can enter text into an input
    // - find input[type="text"]
    // - simulate 'change' event with simulate()
    // - provide a fake event object and feed text to input
    // - force the component to update with update()
    // - assert that input value has changed woth prop
    it('can enter text into an input', () => {
      expect(wrapped.find('input[type="text"]').prop('value')).toBe(todoText);
    });

    // --- on form submit, input should get emtied
    // - find input[type='text']
    // - simulate 'change' event with simulate()
    // - provide a fake enevt object and feed text to input
    // - find form
    // - simulate 'submit' event
    // - provide a fake event object and feed props to component
    // - force component to update
    // - assert that input value has changed
    it('on form submit, input should get emtied', () => {
      expect(wrapped.find('input[type="text"]').prop('value')).toBe(todoText);

      const submitEventMock = {
        preventDefault: () => null,
      };
      const props = {
        onSave: () => null,
      };
      wrapped.setProps(props);

      wrapped.find('form').simulate('submit', submitEventMock);
      wrapped.update();
      expect(wrapped.find('input[type="text"]').prop('value')).toBe('');
    });
  });

  describe('callbacks', () => {
    // --- onSave prop has been called
    // - find form
    // - simulate "submit" event
    // - provide a fake event object and feed props to component
    // - assert that mocks were called once

    it('onSave prop has been called', () => {
      const submitEventMock = {
        preventDefault: () => null,
      };

      const onSavePropMock = jest.fn();
      const props = {
        onSave: onSavePropMock,
      };
      wrapped.setProps(props);

      wrapped.find('form').simulate('submit', submitEventMock);

      expect(onSavePropMock.mock.calls.length).toBe(1);
    });
  });
});
