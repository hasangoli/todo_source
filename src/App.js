import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { useState, useEffect } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      window.localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [input, setInput] = useState("");

  // Filter Section
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className="app">
        <Header isActive={isActive} setIsActive={setIsActive} />
        <Input
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={filteredTodos} setTodos={setTodos} />
        <Filter todos={todos} setFilteredTodos={setFilteredTodos} />
      </div>
    </div>
  );
};

export default App;
