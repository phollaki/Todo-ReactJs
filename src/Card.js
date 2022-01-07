import React, { useState } from "react";
import "./Card.css";
import Todo from "./Todo";

function Card() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  const deleteHandler = ({ e, currentTodo }) => {
    setTodos(todos.filter((todo) => todo !== currentTodo));
  };
  console.log(todos.length);
  return (
    <div className="card">
      <p className="card__title" htmlFor="add">
        What do you plan for today?
      </p>
      <form className="card__form" onSubmit={addTodoHandler}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="card__input"
          type="text"
          placeholder="Add todo"
        />
        <button type="submit" className="card__btn">
          Add
        </button>
      </form>
      {todos.length > 0 &&
        todos.map((todo, i) => (
          <Todo key={i} name={todo} deleteHandler={deleteHandler} />
        ))}
    </div>
  );
}

export default Card;
