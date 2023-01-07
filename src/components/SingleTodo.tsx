import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single-text">{todo.todo}</span>

      <div>
        <span className="icon">✍️</span>
        <span className="icon">❌</span>
        <span className="icon">✔️</span>
      </div>
    </form>
  );
};

export default SingleTodo;
