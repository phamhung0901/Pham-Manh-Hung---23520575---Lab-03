// filepath: d:\CTTT 2023\Subjects\Kì 5\Phát triển ứng dụng web - MSIS207.Q14.CTTT\Lab assignment\Lab 3\Lab03\lab03_web\src\components\todo\TodoItem.jsx
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
