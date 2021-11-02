import React , {useState} from 'react'
import Todo from './Todo';
import Todo1 from './Todo1';
import TodoForm from './TodoForm'

function TodoList1() {
    const [todos , setTodos] = useState([]) ;
    console.log("refresh is happening here we aware")
    
    const addTodo = (todo) => {
        if(!todo.text ){
            return;
        }

        const newTodos = [todo, ...todos] ; 
        setTodos(newTodos);
        console.log(...todos)

    }

    const updateTodo = (todoId, newValue ) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
      
          setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    }

    const removeTodo = id => {
        let leftTodo = todos.filter((todo) => todo.id !== id ) ; 
        setTodos(leftTodo) ;  
    }

    const completeTodo = id => {
        let updateTodos = todos.map(
            (todo , id) =>  {
                if (todo.id === id) {
                todo.isComplete = !todo.isComplete ; 
                } 
                return todo
            })

        setTodos(updateTodos);
    }
    return (
        <>
            <h1> What's the plan today </h1>
            <TodoForm onSubmit={addTodo}/>

        {   todos.map( todo => {
            
            return  <Todo1 todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            
            })
        }
            
        </>
    )
}
export default TodoList1

