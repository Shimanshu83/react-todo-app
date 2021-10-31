import React , {useState} from 'react'

function TodoForm(props) {
    const [input , setInput] = useState('');

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random() * 1000000000000000000),
            text : input 
        })
        setInput("");
    }
    return (
        <form className="todo-form" onSubmit={submitHandler}>

            <input 
              onChange={inputChangeHandler}
              type="text"
              className="todo-input"
              placeholder="add a todo" 
              value={input} 
              name="text" 
              />
            <button className="todo-button" >  Add </button> 


        </form>
    )
}

export default TodoForm
