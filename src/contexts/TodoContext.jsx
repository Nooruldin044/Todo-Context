import { createContext, useContext } from "react";

// Default context (only for type + intellisense, not actual state)
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook for using context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Export provider so we can wrap App
export const TodoProvider = TodoContext.Provider;
