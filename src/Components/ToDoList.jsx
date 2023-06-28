import ToDoItem from "./ToDoItem";
import "../Style/ToDoList.css"
function ToDoList(props) {
    return ( 
        <div className="ToDoList">
            {props.todos.map(todo=>
                {
                    return <div className="ListItem">
                        <ToDoItem className="Item" key={todo.id} todo={todo}></ToDoItem>
                    </div> 
                })}
        </div>
     );
}

export default ToDoList;