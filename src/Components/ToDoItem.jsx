import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [editBtn, setEditBtn] = useState(false);
  const [text, setText] = useState(todo.text);

  // for saving edited todo
  const saveEdit = () => {
    editTodo(todo.id, text);
    setEditBtn(false);
  };

  return (
    <div className=" flex justify-between items-center bg-gray-200 rounded ml-14 mr-14 p-4">
      {editBtn ? (
        <>
          <input className="border p-1 w-full mr-2" value={text} onChange={(e) => setText(e.target.value)}/>
          <button onClick={saveEdit} className="bg-green-500 text-white px-2 rounded" > Save</button>
        </>
      ) : (
        
        <>
        {/* <input className="w-6 h-11" type="checkbox" /> */}
          <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.text}</span>

          <div className="flex gap-2">
            <button onClick={() => setEditBtn(true)} className="bg-yellow-400 px-2 rounded">Edit </button>
            <button
              onClick={() => deleteTodo(todo.id)}className="bg-red-500 text-white px-2 rounded"> Delete </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
