import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Input = ({ input, setInput, todos, setTodos }) => {
  const [check, setCheck] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    if (input) {
      setTodos([
        ...todos,
        { title: input, isCompleted: check, id: Math.random() },
      ]);
    } else {
      console.log("At least enter 1 character");
    }
    setInput("");
    setCheck(false);
  };

  return (
    <form>
      <div className="checkbox" onClick={() => setCheck(!check)}>
        <span className="check-btn">
          {check ? <FaCheck className="icon" /> : <span></span>}
        </span>
      </div>
      <input
        type="text"
        value={input}
        placeholder="Create a new todo..."
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default Input;
