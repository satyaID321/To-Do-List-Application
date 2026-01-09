import "./App.css";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // keep data on refresh
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos( todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  };

  const editTodo = (id, newText) => {
    setTodos( todos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className="min-h-screen bg-pink-100 flex justify-center">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Header />
        <ToDoList  todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </div>
    </div>
  );
}

export default App;
