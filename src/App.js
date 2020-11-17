import "./App.css";

function App() {
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
