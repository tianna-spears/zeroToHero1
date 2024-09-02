/* eslint-disable react/prop-types */
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          index={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
