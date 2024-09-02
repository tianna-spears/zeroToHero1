import { useState } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    setTodoValue(''); // Clear input field after adding
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    setEditIndex(index);
  }

  function handleSaveTodo() {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? todoValue : todo
      );
      setTodos(updatedTodos);
      setTodoValue('');
      setEditIndex(null);
    } else {
      handleAddTodos(todoValue);
    }
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleSaveTodo={handleSaveTodo}
      />

      <TodoList 
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
