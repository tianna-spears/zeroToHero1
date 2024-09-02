/* eslint-disable react/prop-types */
export default function TodoInput({ todoValue, setTodoValue, handleSaveTodo }) {
    return (
      <header>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Enter todo..."
        />
        <button onClick={handleSaveTodo}>
          {todoValue ? 'Save' : 'Add'}
        </button>
      </header>
    );
  }
  