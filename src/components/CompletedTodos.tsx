import React from "react";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
}

const CompletedTodos: React.FC<ITodoListProps> = (props) => {
  const { items } = props;

  return (
    <div className="container">
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export { CompletedTodos };
