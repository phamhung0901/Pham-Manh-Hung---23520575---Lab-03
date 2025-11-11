import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEdit() {
    setEditing(true);
  }
  function handleSave() {
    if (editText.trim()) {
      todo.text = editText; // Thực tế nên truyền hàm update từ TodoApp
      setEditing(false);
    }
  }
  function handleCancel() {
    setEditText(todo.text);
    setEditing(false);
  }

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none', display: 'flex', alignItems: 'center', gap: 8 }} aria-label={`Todo item: ${todo.text}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        aria-label="Toggle complete"
      />
      {editing ? (
        <>
          <input value={editText} onChange={e => setEditText(e.target.value)} aria-label="Edit task" />
          <button onClick={handleSave} aria-label="Save edit">Save</button>
          <button onClick={handleCancel} aria-label="Cancel edit">Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit} aria-label="Edit task">Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} aria-label="Delete task">Delete</button>
    </li>
  );
});

export default TodoItem;
