import TodoItem from './TodoItem';
import React from 'react';

const TodoList = React.memo(function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (!todos || todos.length === 0) {
    return <ul aria-label="Todo list"><li style={{ color: '#9ca3af' }}>No tasks</li></ul>;
  }
  return (
    <ul aria-label="Todo list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
});

export default TodoList;
