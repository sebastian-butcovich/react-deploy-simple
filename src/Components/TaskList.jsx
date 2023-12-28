import {TaskCard} from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'
export function TaskList(){

    const {task} = useContext(TaskContext)
    
    if(task .length === 0 )
    {
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>
    }
    return (<div className='grid grid-cols-4 gap-2'> 
        {
        
            task.map(task =>(
                <TaskCard task={task} key={task.id}/>
            ))
        }
            </div>
            )
}