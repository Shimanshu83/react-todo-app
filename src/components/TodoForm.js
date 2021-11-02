import React , {useState , useEffect , useRef} from 'react'

function TodoForm(props) {
    const [input , setInput] = useState(() => props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });


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
    
      {if (props.edit ){

        return ( <form className="todo-form" onSubmit={submitHandler}>

            <input 
              onChange={inputChangeHandler}
              type="text"
              className="todo-input"
              placeholder="add a todo" 
              value={input} 
              name="text" 
              ref={inputRef}
              className="todo-input"
              />
            <button className="todo-button" >  update </button> 


        </form>)
      }
    else {
      return (
        <form className="todo-form" onSubmit={submitHandler}>

            <input 
              onChange={inputChangeHandler}
              type="text"
              className="todo-input"
              placeholder="add a todo" 
              value={input} 
              name="text" 
              ref={inputRef}
              className="todo-input"
              />
            <button className="todo-button" >  Add </button> 


        </form>

      )
    }
    
    }
    
}

export default TodoForm
