import React from 'react';
import useGetClassName from '../../hooks/useGetClassName';
import './App.css';

export const App = () => {
  const getClassName = useGetClassName(App.displayName);

  return (
    <div className={getClassName}>
      Hello
    </div>
  );
}


App.displayName = "App";