import React, { useState } from 'react';
import useGetClassName from '../../hooks/useGetClassName';
import TodoList from '../TodoList';
import AddTodo from '../AddTodo';

import './App.css';

export const App = () => {
  const getClassName = useGetClassName(App.displayName);
  const [todoItems, setTodoItems] = useState([
    {
      name: 'commit to open source',
      isDone: true,
    },
    {
      name: 'do university tasks',
      isDone: false,
    }
  ]);
  
  const [isDuplicateNameError, setDuplicateNameError] = useState(false);
  const [isEmptyError, setEmptyError] = useState(false);

  const addTodo = (itemName) => {
    const isDuplicate = todoItems.filter((item) => item.name === itemName).length;

    if (isDuplicate || !itemName.trim()) {
      setDuplicateNameError(isDuplicate);
      setEmptyError(!itemName.trim())
      return;
    }

    !isDuplicate.length && setTodoItems([
      ...todoItems,
      {
        name: itemName,
        isDone: false
      }
    ])

    setDuplicateNameError(false);
    setEmptyError(false)
  }

  return (
    <div>
      <TodoList
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        setDuplicateNameError={setDuplicateNameError}
        setEmptyError={setEmptyError}
      />
      <AddTodo
        addTodo={addTodo}
      />
      {isDuplicateNameError && <div>todo item with this name already exists</div>}
      {isEmptyError && <div>you can not add todo with empty name</div>}
    </div>
  );
}


App.displayName = "App";