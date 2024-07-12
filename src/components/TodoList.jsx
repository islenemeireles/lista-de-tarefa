import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../App.css'; // estilos específicos do componente aqui

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const MAX_TITLE_LENGTH = 33;
  const MAX_DESCRIPTION_LENGTH = 34;

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_TITLE_LENGTH) {
      setNewTaskTitle(value);
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_DESCRIPTION_LENGTH) {
      setNewTaskDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() === '') return;
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription
    };
    setTasks([...tasks, newTaskObj]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEdit = (editedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleTitleChange}
          placeholder="Título da tarefa"
          maxLength={MAX_TITLE_LENGTH} // limita o número máximo de caracteres para o título
        />
        <textarea
          value={newTaskDescription}
          onChange={handleDescriptionChange}
          placeholder="Descrição da tarefa"
          maxLength={MAX_DESCRIPTION_LENGTH} // limita o número máximo de caracteres para a descrição
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;