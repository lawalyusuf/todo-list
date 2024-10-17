import React from 'react';
import ReactDOM from 'react-dom/client';
import './todo-list.css'; //styling




// Sample Todo Data
const todos = [
  { task: 'Buy groceries', completed: false },
  { task: 'Finish React project', completed: true },
  { task: 'Go for a run', completed: false },
  { task: 'Push Todo Task to Github', completed: true },

];

// Main component that renders the entire Todo list section
function Todo(){
  return(
    <div>
      <h1 className="todo">Todo List</h1>
      <TodoList /> {/* Renders the list of todo items */}
    </div>
  )
};

// Component responsible for rendering the list of todos
function TodoList(){
  return(
    <div className="todo-list">
      {/* Iterate over the todos array and create a TodoItem component for each todo */}
      {todos.map((todo) => (<TodoItem todoOject={todo} key={todo.task}  />))}
    </div>
  )
};

// Component responsible for displaying a single todo item (Child)
function TodoItem({todoOject}){
  return (
    <div className={`todo-item ${todoOject.completed ? 'completed' : ''}`}>
      {todoOject.task}
    </div>
  )
 
}

// Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
