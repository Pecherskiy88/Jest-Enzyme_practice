import React from 'react';

const TodosList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx + 1}>{item}</li>
      ))}
    </ul>
  );
};

export default TodosList;
