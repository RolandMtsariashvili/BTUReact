import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList';
import AddTodo from '../AddTodo';

import './App.css';

export const App = () => {
  const [todoItems, setTodoItems] = useState(JSON.parse(window.localStorage.getItem('todoItems')));
  
  const [isDuplicateNameError, setDuplicateNameError] = useState(false);
  const [isEmptyError, setEmptyError] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems])

  const addTodo = (itemName) => {
    const isDuplicate = !!todoItems.filter((item) => item.name === itemName).length;
    const isEmpty = !itemName.trim();

    if (isDuplicate || isEmpty) {
      setDuplicateNameError(isDuplicate);
      setEmptyError(isEmpty)
      return;
    }

    setTodoItems([
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
    <div className='App'>
      <TodoList
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        setDuplicateNameError={setDuplicateNameError}
        setEmptyError={setEmptyError}
      />
      <AddTodo
        addTodo={addTodo}
      />
      {isDuplicateNameError && <div className='errorMessage'>todo item with this name already exists</div>}
      {isEmptyError && <div className='errorMessage'>you can not add todo with empty name</div>}
    </div>
  );
}


App.displayName = "App";