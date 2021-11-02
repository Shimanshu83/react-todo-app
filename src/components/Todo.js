import React , {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti' 

function Todo({todos , completeTodo, removeTodo , updateTodo, setTodo}) {
    const [edit , setEdit] = useState({
        id : null ,  
        value : ""
    });
    console.log("got refresh")

    const submitUpdate = value => {
        updateTodo(edit.id , value); 
        setEdit({
            id : null , 
            value : ""
        })
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    const isComplete = (todo) => {
        console.log("I am in isComplete")
        if(todo.isComplete){
            todo.isComplete = null ; 
            console.log("yes")
            setTodo(todos)
        }
        else {
            todo.isComplete = true; 
            setTodo(todos)
            console.log("no")
        }
        
    }


    return todos.map((todo , id)=>{
        return(
        <div  className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key = {id}
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
    })
}

export default Todo ;