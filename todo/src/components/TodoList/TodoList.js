import React from 'react';
import TodoItem from '../TodoItem';
import './TodoList.css';

export const TodoList = ({
  todoItems,
  setTodoItems,
  setEmptyError,
  setDuplicateNameError,
}) => {
  const moveTodoUp = (index) => {
    const todoItem = todoItems[index];
    const previousItem = todoItems[index - 1];

    if (!previousItem) return;

    const newTodoItems = [...todoItems];
    newTodoItems[index - 1] = todoItem;
    newTodoItems[index] = previousItem;

    setTodoItems([...newTodoItems])
  }

  const setDone = (index, isDone) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].isDone = isDone;
    setTodoItems(newTodoItems)
  }

  const editTodoItem = (index, name) => {
    const isDuplicate = todoItems.filter((item) => item.name === name).length;

    if (isDuplicate || !name.trim()) {
      setDuplicateNameError(isDuplicate);
      setEmptyError(!name.trim())
      return;
    }

    const newTodoItems = [
      ...todoItems,
    ]

    newTodoItems[index] = { name, isDone: todoItems[index].isDone };
    setTodoItems([...newTodoItems]);

    setDuplicateNameError(false);
    setEmptyError(false)
  }

  const deleteTodoItem = (index) => {
    setTodoItems([...todoItems.filter((item, itemIndex) => index !== itemIndex)])
  }

  return (
    <div>
      <ul>
        {!todoItems.length ? <div>add your first TODO!</div> : (
          todoItems.map((todoItem, index) => (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.name}
              index={index}
              editTodoItem={editTodoItem}
              deleteTodoItem={deleteTodoItem}
              moveTodoUp={moveTodoUp}
              setDone={setDone}
            />
          ))
        )}
      </ul>
    </div>
  )
}