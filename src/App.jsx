import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(input) {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: input,
        completed: false,
      },
    ]);
  }

  function handleCompleteTodo(id) {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <main className="h-screen flex justify-center items-center bg-gray-500">
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
          <h3 className="font-bold text-2xl text-center mb-4">Todo List</h3>
          <Form onAdd={handleAddTodo} />
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              onComplete={handleCompleteTodo}
              onDelete={handleDeleteTodo}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
