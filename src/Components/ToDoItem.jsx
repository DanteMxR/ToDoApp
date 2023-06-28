import React,{useState} from "react";
import "../Style/ToDoItem.css"


function ToDoItem({todo}) {
    const [Check,setCheck]= useState(todo.isCompleted)

    const cls=['todo']

    if(Check)
    {
        cls.push('completed')
    }

    return ( 
    <div className = {Check ? 'todo completed' : 'todo'}>
        <h2> <input className="CheckboxItem"  type="checkbox" checked={Check} onChange={()=>setCheck(!Check)} ></input> 
        {todo.name}
        </h2>
    </div>);
}

export default ToDoItem;