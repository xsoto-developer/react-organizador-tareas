import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export const TodoForm = () => {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() === '') {
      setShowErrorMessage(true);
    } else {
      // Aquí agregarías la lógica para agregar la tarea
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
      setNewTodoValue(''); // Limpiar el campo después de enviar
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShowErrorMessage(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega una tarea a tu lista</label>
      <textarea
        placeholder="Describe brevemente tu tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      {showErrorMessage && (
        <p style={{ color: 'red' }}>Por favor, ingresa una tarea.</p>
      )}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

// export { TodoForm };
