import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-300 w-full">
        No todos yet. Add one above!
      </p>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
