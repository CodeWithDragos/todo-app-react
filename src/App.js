import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNew] = useState("");

  const handleChange = (e) => {
    const newTodo = e.target.value;
    setNew(newTodo);
  };

  const handleClick = () => {
    const newTodos = [...todos, newTodo];
    if (newTodo && newTodo.length) {
      setNew("");
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <div className="add-todo-box">
        <input
          placeholder="Add a todo here..."
          className="input"
          onChange={handleChange}
          type="text"
          value={newTodo}
        ></input>
        <button className="button" onClick={handleClick}>
          Add todo
        </button>
      </div>
      <h3>Todos:</h3>
      {todos.map((todo) => (
        <div className="todo">{todo}</div>
      ))}
    </div>
  );
}

export default App;
