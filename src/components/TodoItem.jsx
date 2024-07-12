import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // limitar o número de caracteres para o título e descrição
    if ((name === 'title' && value.length <= 33) || (name === 'description' && value.length <= 34)) {
      setEditedTask({ ...editedTask, [name]: value });
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            maxLength={33} // limite máximo de caracteres para o título
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            maxLength={34} // limite máximo de caracteres para a descrição
          />
          <button onClick={handleSave}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;