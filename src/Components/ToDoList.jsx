import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleTodo, editTodo }) {
  const [inputData, setInputData] = useState("");

  const handleAdd = () => {
    if (inputData.trim() === "") return;
    addTodo(inputData);
    setInputData("");
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-3 mb-4">
        <input  type="text" placeholder="Enter task..." className="border rounded w-full p-3 mb-3
         focus:ring-blue-400" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
        <button onClick={handleAdd} className="bg-blue-800 text-white w-full py-3 rounded font-medium "> Add Task </button>
      </div>

      <div className="space-y-3"> {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;