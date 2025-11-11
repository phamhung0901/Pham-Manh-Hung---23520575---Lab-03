// filepath: d:\CTTT 2023\Subjects\Kì 5\Phát triển ứng dụng web - MSIS207.Q14.CTTT\Lab assignment\Lab 3\Lab03\lab03_web\src\components\todo\TodoForm.jsx

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
