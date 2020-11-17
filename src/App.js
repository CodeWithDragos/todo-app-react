import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setNew] = useState("");

  const handleChange = (e) => {
    // We capture the value of the input and set it as current todo
    const currentTodo = e.target.value;
    setNew(currentTodo);
  };

  const handleClick = () => {
    if (currentTodo && currentTodo.length) {
      // Let's create a new array of todos containing the current todo and the old ones using the spread operator ...
      const newTodos = [...todos, currentTodo];
      // set current todo to "" to clean the input field
      setNew("");
      // Set the todos to the new todos array
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
          value={currentTodo}
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
