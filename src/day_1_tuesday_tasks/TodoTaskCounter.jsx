import React from 'react'
import { useState } from 'react'


const TodoTaskCounter = () => {
const [task, setTask] = useState("");
const [taskList, setTaskList] = useState([]);


const addTask = () => {
 if (task.trim() !== "") {
    setTaskList([...taskList, task]);

    setTask("");
 }

 };

   const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
   };



 
  return (
    <div>

        <h2>Todo Task Cunter</h2>
        <input type="text" placeholder='Enter a task' value={task} onChange={(e) => setTask(e.target.value)} />
        <br/><br/>
        <button onClick={addTask}>Add Task</button>
         <h3>Total Tasks: {taskList.length}</h3>   

           {taskList.length === 0 ?(
          <p>no task available</p>
           ) : (
            <ul>
            {taskList.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
            </ul>
           


           )}
    </div>
  );
};

export default TodoTaskCounter
