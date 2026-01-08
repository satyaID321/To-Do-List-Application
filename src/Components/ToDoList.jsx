import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleTodo, editTodo }) {
  const [inputData, setInputData] = useState("");
  
  // for adding new todo
  const handleAdd = () => {
    if (inputData.trim() === "") return;
    addTodo(inputData);
    setInputData("");
  };

  return (
    <div>
      <div className="flex gap-2 mb-4 mr-10 ml-10">
        <input type="text" className="border p-2 w-full rounded" placeholder="Enter task..."  
        value={inputData} onChange={(e) => setInputData(e.target.value)}/>
        <button onClick={handleAdd} className="bg-blue-900 text-white px-4 rounded">Add</button>
      </div>
      {todos.map((todo) => (<ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      ))}
    </div>
  );
}

export default ToDoList;
