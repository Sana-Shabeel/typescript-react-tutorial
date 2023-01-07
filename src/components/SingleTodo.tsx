import React, { useState } from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        // s is the strike tag
        <s className="todos__single-text">{todo.todo}</s>
      ) : (
        <span className="todos__single-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          ✍️
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          ❌
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          ✔️
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
