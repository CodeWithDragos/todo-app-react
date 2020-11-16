import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNew] = useState("");

  return (
    <div>
      <div className="add-todo-box">
        <input placeholder="Add a todo here..." className="input" type="text" />
        <button className="button">Add todo</button>
      </div>
      <h3>Todos:</h3>
      ... display todos here
    </div>
  );
}

export default App;
