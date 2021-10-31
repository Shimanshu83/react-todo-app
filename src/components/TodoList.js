import React , {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos , setTodos] = useState([]) ;
    
    const addTodo = (todo) => {
        if(!todo.text ){
            return;
        }

        const newTodos = [todo, ...todos] ; 
        setTodos(newTodos);
        console.log(...todos)

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
        <div>
            <h2> What's the plan today </h2>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}
export default TodoList

