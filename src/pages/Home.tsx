import React, { useState, useEffect, useRef } from "react";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../types/data";
import { CompletedTodos } from "../components/CompletedTodos";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };
  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const completedTodo = (id: number) => {
    todos
      .filter((todo) => todo.id === id)
      .map((todo) => {
        completedTodos.push(todo);
      });
    setCompletedTodos(completedTodos);
    // todos.map((todo) => {
    //   if (todo.id === id) return completedTodos.push(todo);
    //   setCompletedTodos(completedTodos);
    // });
  };

  const getAllTodos = () => {};
  const getCompletedTodos = () => {};
  const removeCompletedTodos = () => {};

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="container">
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          completedTodo={completedTodo}
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>add todo</button>
      </div>
      <CompletedTodos items={completedTodos} />
      <div className="box-btn">
        <button onClick={getAllTodos}>All</button>
        <button onClick={getCompletedTodos}>Completed</button>
        <button onClick={removeCompletedTodos}>Clean completed</button>
      </div>
    </>
  );
};
export default Home;
