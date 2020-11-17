import { useState } from "react";
import "./App.css";

function App() {
  // Create a todos state handler to store all our todos as an array
  const [todos, setTodos] = useState([]);
  // Create a currenttodo state handler to store the current todo
  const [currentTodo, setNew] = useState("");
  // Create an error state handler to help us inform the user in case there is an error
  const [isError, setError] = useState(false);

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
    } else if (currentTodo === "") {
      // Set the error to true to display the error state
      setError(true);
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
      {isError && <p>The todo cannot be empty!</p>}
      <h3>Todos:</h3>
      {todos.map((todo) => (
        <div className="todo">{todo}</div>
      ))}
    </div>
  );
}

export default App;
