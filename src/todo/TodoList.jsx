// filepath: d:\CTTT 2023\Subjects\Kì 5\Phát triển ứng dụng web - MSIS207.Q14.CTTT\Lab assignment\Lab 3\Lab03\lab03_web\src\components\todo\TodoList.jsx

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
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
}

export default TodoList;
