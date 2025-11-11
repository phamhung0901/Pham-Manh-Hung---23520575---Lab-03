import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function addTodo(text) {
    if (!text.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setLoading(false);
    }, 500);
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
    <div aria-label="Todo App">
      <h3>To-Do List</h3>
      <TodoForm addTodo={addTodo} />
      {loading && <div style={{ color: '#6366f1', fontWeight: 600 }}>Adding...</div>}
      {todos.length === 0 && !loading ? (
        <div style={{ color: '#9ca3af', marginTop: 12 }}>No todos yet. Add your first task!</div>
      ) : (
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}

export default TodoApp;
