import React from 'react';
import ReactDOM from 'react-dom/client';
import './todo-list.css';


// To-do array Object
const todos = [
  { task: 'Buy groceries', 
    completed: false 
  },

  { task: 'Finish React project', 
    completed: true 
  },

  { task: 'Go for a run', 
    completed: false 
  },
];



function App(){

  return(
    "Hello React App"
  )

}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

