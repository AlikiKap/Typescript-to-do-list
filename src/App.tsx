import React, {FC, ChangeEvent, useState, ButtonHTMLAttributes} from 'react';
import './styles/App.scss';
import TodoTask from './Components/TodoTask';
import { Task } from "./Interfaces";
import TaskTimer from './Components/TaskTimer';


const App: FC =() => {

const [task, setTask] = useState<string>("");
const [deadline, setDeadline] = useState<number>(0);
const [todoList, setTodoList] = useState<Task[]>([]);
const time = new Date();

time.setMinutes(time.getMinutes() + 25)

const  handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
  
  if (event.target.name === 'task'){
    setTask(event.target.value)
  }else{
    setDeadline(Number(event.target.value));
  }
};

const handleKeypress = (event: any):void => {
  if (event.code === 'Enter'){
    addTask();
  }
}

const addTask = ():void =>{

  const newTask ={
    taskName: task,
    deadline: deadline
  };
  setTodoList([...todoList, newTask])
  console.log(todoList);

  setDeadline(0);
  setTask('');
  
};



const completeTask = (taskNameToDelete:string):void => {
      setTodoList(todoList.filter((task) => {
        return task.taskName !== taskNameToDelete
      }))
}

  return (
    <>
    <style>{`
    body {
      margin: 0px;
      padding: 0px;
    }
  `}</style>
    <div className="App">
      <TaskTimer expiryTimestamp={time}/>
      <div className="header">
          <div className='inputs-container'>
          <input 
          className='task-input'
          type= "text"
          placeholder='task'
          name ='task'
          value={task}
          required
          onChange={handleChange}
          onKeyDown={handleKeypress}>
          </input>

          <input
          className='task-input'
          type= "number"
          placeholder='deadline'
          name ='deadline'
          value={deadline}
          onChange={handleChange}
          onKeyDown={handleKeypress}>
          </input>

          </div>
          <button className='add-task-btn' onClick={addTask} type="submit">Add task</button>
      </div>
      <div className="todoList">
      {todoList.map((task: Task, key:number)=> {
        return <TodoTask key={key} task ={task} completeTask = {completeTask}/>;
      })}
      </div>
    </div> 
    </>
  );
}

export default App;
