import React from 'react'
import ReactDOM from 'react-dom/client'
import {APP} from './App.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <APP/> 
    </TaskContextProvider>
  </React.StrictMode>,
)
