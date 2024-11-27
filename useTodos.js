import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodoAction] = useReducer(todoReducer, [], init);
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatchTodoAction({
      type: "[TODO] Add todo",
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] Delete todo",
      payload: todoId,
    };
    dispatchTodoAction(action);
  };

  const handleToggleTodo = (todoId) => {
    dispatchTodoAction({
      type: "[TODO] Toggle todo",
      payload: todoId,
    });
  };

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  };
};
