import { useState } from "react";

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const resetTodo = () => {
    setTodos([]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((x, i) => i !== index));
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Aggiungi todo"
      />
      <button onClick={addTodo}>Aggiungi</button>
      <button onClick={resetTodo}>Reset</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
