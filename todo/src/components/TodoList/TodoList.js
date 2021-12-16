import React from 'react';
import useGetClassName from '../../hooks/useGetClassName';
import TodoItem from '../TodoItem';
import './TodoList.css';

export const TodoList = ({
  todoItems,
  setTodoItems,
  setEmptyError,
  setDuplicateNameError,
}) => {
  const getClassName = useGetClassName(TodoList.displayName);

  const editTodoItem = (index, name, isDone) => {

    const isDuplicate = todoItems.filter((item) => item.name === name).length;

    if (isDuplicate || !name.trim()) {
      setDuplicateNameError(isDuplicate);
      setEmptyError(!name.trim())
      return;
    }

    const newTodoItems = [
      ...todoItems,
    ]
    newTodoItems[index] = { name, isDone };
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
        {todoItems.map((todoItem, index) => (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.name}
            index={index}
            editTodoItem={editTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>

    </div>
  )
}

TodoList.displayName = "TodoList";