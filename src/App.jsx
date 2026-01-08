import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // On refreshing data should remain
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // for adding new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // todo delete the todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //for edit the todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <>
      <div className='w-400 justify-self-center'>
        <Header />
        <ToDoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </div>
    </>
  )
}

export default App
