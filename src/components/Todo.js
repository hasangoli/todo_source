import { FaCheck, FaTimes } from "react-icons/fa";

const Todo = ({ id, title, isCompleted, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const removeHandler = () => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <li className="todo">
      <div className="is-complete" onClick={completeHandler}>
        <span className="check-btn">
          {isCompleted ? <FaCheck className="icon" /> : ""}
        </span>
      </div>
      <div
        className="title"
        style={
          isCompleted
            ? { textDecoration: "line-through", opacity: ".5" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </div>
      <button onClick={removeHandler}>
        <FaTimes className="icon" />
      </button>
    </li>
  );
};

export default Todo;
