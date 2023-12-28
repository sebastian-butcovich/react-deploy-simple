
import {TaskList} from './Components/TaskList';
import TaskForm from './Components/TaskForm';
export function APP() {
  return (
    <main className='bg-zinc-900 h-screen'> 
      <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}
export default APP;