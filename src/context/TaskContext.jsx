import {createContext,useState,useEffect } from 'react'
import {task} from '../Data/task';

export const TaskContext = createContext();
export function TaskContextProvider(props) {
    const [taskList, setTaskList] = useState([]);

    function createTask(task){
        setTaskList([...taskList,{
          id:taskList.length ,
          name:task.title,
          descripción:task.descrip
        }]);
    }

    function deleteTask(taskId){
        setTaskList(taskList.filter(task=>task.id !== taskId))
      }

      useEffect(()=>{
        setTaskList(task);
    },[])
  return (
    <TaskContext.Provider value={{
        task:taskList,
        deleteTask:deleteTask,
        createTask:createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}