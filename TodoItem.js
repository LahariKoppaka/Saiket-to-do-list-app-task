import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;