import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  completedTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo, completedTodo } = props;

  return (
    <>
      <div>
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            completedTodo={completedTodo}
            {...todo}
          />
        ))}
      </div>
    </>
  );
};
export { TodoList };
