import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      To do app
      <TodoList/>
    </div>
  );
}

export default App;
