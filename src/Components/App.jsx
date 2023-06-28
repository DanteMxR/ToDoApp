import "../Style/App.css"
import React,{useState,useEffect} from "react";
import ToDoList from "./ToDoList";


function App() {
  const [todos,SetTodos]= useState([
    // {id: 1 ,name:'Text1',isCompleted:false },
    // {id: 2 ,name:'Text2',isCompleted:false },
    // {id: 3 ,name:'Text3',isCompleted:false },
  ])
  const [myArr,SetArr]=useState([])
  useEffect(()=>{
    const raw= localStorage.getItem('todos')||[]
      SetTodos(JSON.parse(raw))
  },[])
  useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos))},[todos])

  const HeandlerChange=(event)=>SetArr(event.target.value)
  const HeandlerClick = ()=>{ 
  const newobj= {id:Date.now(),name:myArr,isCompleted:false}
  const newArr=[...todos,newobj]
  SetTodos(newArr)
  SetArr('')
  }
  return (
    <div className="App">
      <div className="MainApp">
        <div className="Header">
        <h1 className="TitleApp">ToDo App</h1>
        <input className="input" value={myArr} onChange={HeandlerChange}></input>
        <button className="inputButton" onClick={HeandlerClick} >Go!</button>
        </div>
        <ToDoList todos={todos} key = {todos.id}/>
      </div>
    </div>
  );
}

export default App;
