/* eslint-disable react/prop-types */
export default function TodoCard({ children, handleDeleteTodo, index, handleEditTodo }) {
    return (
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button onClick={() => handleEditTodo(index)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodo(index)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    );
  }
  