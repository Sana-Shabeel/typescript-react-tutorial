import React from "react";
import { Todo } from "../model";
// import { AiFilEdit } from "";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form>
      <span>{todo.todo}</span>

      <div className="">
        <span className="icon">✍️</span>
        <span className="icon">❌</span>
        <span className="icon">✔️</span>
      </div>
    </form>
  );
};

export default SingleTodo;
