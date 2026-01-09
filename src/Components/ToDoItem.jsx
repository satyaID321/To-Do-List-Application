import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [editBtn, setEditBtn] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, text);
    setEditBtn(false);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3
            overflow-hidden"> {editBtn ? (
        <div className="flex flex-col sm:flex-row w-full gap-2 min-w-0">
          <input className="border rounded p-2 w-full" value={text} onChange={(e) => setText(e.target.value)}/>
          <button  onClick={saveEdit} className="bg-green-700 text-white px-4 py-2 rounded sm:w-auto w-full" > Save </button>
        </div>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer flex-1 min-w-0 break-all text-base
              ${todo.completed ? "line-through text-gray-500" : ""}`}> {todo.text}
          </span>
          <div className="flex gap-2 sm:shrink-0">
            <button  onClick={() => setEditBtn(true)} className="bg-amber-500 px-3 py-1 rounded"> Edit </button>
            <button  onClick={() => deleteTodo(todo.id)} className="bg-orange-700 text-white px-3 py-1 rounded" > Delete </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;