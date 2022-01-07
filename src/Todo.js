import React, { useState } from "react";
import "./Todo.css";
function Todo({ name, deleteHandler }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="todo">
      <p className={completed && "completed"}>{name}</p>
      <div className="todo__btns">
        <button
          className={`todo__btn todo__btn--completed`}
          onClick={(e) => setCompleted(true)}
        >
          completed
        </button>
        <button
          onClick={(e) => deleteHandler({ e: e, currentTodo: name })}
          className="todo__btn todo__btn--delete"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
