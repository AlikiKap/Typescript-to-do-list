import React from 'react'
import { ITask } from '../Interfaces'

interface Props{
    task: ITask;
    completeTask(taskNameToDelete:string): void;
}

const TodoTask = ({task, completeTask}: Props ) => {
  return (
    <div>
        {task.taskName}
        {task.deadline}
        <button onClick={() => completeTask(task.taskName)}>Done</button>
    </div>
  )
}

export default TodoTask