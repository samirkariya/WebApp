import { useState } from 'react';

function App() {
  const [curTask,setCurTask] = useState("");
  const [allTask,setAllTask] = useState([]);
  const [flag,setFlag] = useState("");

  const addTask = ()=>{
    if(flag===""){
      if(curTask!=="")
        var templist = [...allTask,curTask];
    }
    else{
       templist = [...allTask];
      templist[flag]=curTask;
    }
    setAllTask(templist);
        setCurTask("");
  }
  const del = (i)=>{
    if(window.confirm('Are you sure you want to delete??')){
      let templist = [...allTask];
      templist.splice(i,1);
      setAllTask(templist);
    }
  }
  const edit = (task,index)=>{
    document.getElementById("taskId").value=task;
    setFlag(index);
  }
  return (
  <>
    <h1>Todo App</h1>
    <input type='text' id="taskId" placeholder='Enter Task' value={curTask} onChange={(e)=>setCurTask(e.target.value)}/>
    <button onClick={addTask}>Add</button>
    <br/>
    <h3>Task List:</h3>
    <ol>
      {allTask.map((task,index)=>
        <li key={index}>{task}
          <button onClick={()=>del(index)}>Delete</button>
          <button onClick={()=>edit(task,index)}>Edit</button>
        </li>
      )}
    </ol>
  </>
  );
}

export default App;
