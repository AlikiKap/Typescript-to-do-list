import React from 'react'
import { Task } from '../Interfaces'

interface Props{
    task: Task;
    completeTask(taskNameToDelete:string): void;
}

const TodoTask = ({task, completeTask}: Props ) => {
  return (
    <div className='task'>
      <div>{task.taskName}</div>
        <div className='days-left-text'>days left: </div>
        <div>{task.deadline}</div>
        <button className='done-btn' onClick={() => completeTask(task.taskName)}>Done</button>
    </div>
  )
}

export default TodoTask