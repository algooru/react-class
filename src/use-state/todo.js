import React, { useState } from 'react';

const TodoExercise = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // TODO: ✏️ Implement the logic to Update the value of the new todo
  const handleInputChange = (e) => {};

  // TODO: ✏️ Implement the logic to add a new todo to the list
  const handleAddTodo = () => {};

  // TODO: ❌ Implement the logic to remove a todo from the list
  const handleRemoveTodo = () => {};

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Todo List Exercise</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          //   ✏️ This runs when user starts typing
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Add a new todo"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc text-left">
        {/* TODO: ✏️ Map over the todos array and render each todo as a list item */}
        <li className="mb-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded"
            onClick={() => handleRemoveTodo()}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoExercise;
