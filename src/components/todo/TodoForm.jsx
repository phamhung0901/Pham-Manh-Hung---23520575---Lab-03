import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task cannot be empty!');
      return;
    }
    addTodo(text);
    setText('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add todo form">
      <input
        type="text"
        value={text}
        onChange={(e) => { setText(e.target.value); setError(''); }}
        placeholder="Enter new task"
        aria-label="New task"
        required
      />
      <button type="submit">Add</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default TodoForm;
