import { useState } from "react";

const Filter = ({ todos, setFilteredTodos }) => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const allFilter = () => {
    setFilteredTodos(todos);
    setAll(true);
    setActive(false);
    setCompleted(false);
  };
  const activeFilter = () => {
    setFilteredTodos(todos.filter(todo => !todo.isCompleted));
    setAll(false);
    setActive(true);
    setCompleted(false);
  };
  const completeFilter = () => {
    setFilteredTodos(todos.filter(todo => todo.isCompleted));
    setAll(false);
    setActive(false);
    setCompleted(true);
  };

  return (
    <div className="filter">
      <span onClick={allFilter} className={`pointer ${all ? "active" : ""}`}>
        All{" "}
      </span>
      <span
        onClick={activeFilter}
        className={`pointer ${active ? "active" : ""}`}
      >
        Active{" "}
      </span>
      <span
        onClick={completeFilter}
        className={`pointer ${completed ? "active" : ""}`}
      >
        Completed
      </span>
    </div>
  );
};

export default Filter;
