import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h3>To-Do List</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
