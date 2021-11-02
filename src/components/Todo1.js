import React , {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti' 

function Todo1({todo , completeTodo, removeTodo , updateTodo}) {
    const [edit , setEdit] = useState({
        id : null ,  
        value : ""
    });
    //value { id: 226386808112181150, text: "asfdfasdf" }

    const submitUpdate = value => {
        updateTodo(edit.id , value); 
        setEdit({
            id : null , 
            value : ""
        })
    }
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    if(edit.id){
        return (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key = {todo.id}
        >
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            <input type="text" 
                    className ="update-input"
                    value = {todo.text}  
                    name="update-text"  
                    onChange={inputChangeHandler} />
        </div>
        <div className="icons">
            <RiCloseCircleLine
             onClick={()=> removeTodo(todo.id)}
             className="delete-icon"
            />
            <TiEdit
             onClick={()=> setEdit({id : todo.id , value : todo.text})}
             className="edit-icon"
            />
        </div>
        
        </div>)
        
    }


    return (   
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key = {todo.id}
        >
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine
             onClick={()=> removeTodo(todo.id)}
             className="delete-icon"
            />
            <TiEdit
             onClick={()=> setEdit({id : todo.id , value : todo.text})}
             className="edit-icon"
            />
        </div>
        
        </div>
         )
         
        
        
}

export default Todo1 ;