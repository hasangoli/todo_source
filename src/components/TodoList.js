import { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const [notCeompleted, setNotCeompleted] = useState(0);

  useEffect(() => {
    let notComplete = todos.filter(todo => !todo.isCompleted);
    setNotCeompleted(notComplete);
  }, [todos]);

  const clearHandler = e => {
    e.preventDefault();
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  return (
    <div className="todos">
      <ul className="todo-list">
        {todos &&
          todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              isActive={todo.isActive}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>

      <div className="bottom">
        <span>{notCeompleted.length} items left</span>
        <span className="pointer" onClick={clearHandler}>
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default TodoList;
