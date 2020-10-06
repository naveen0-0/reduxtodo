import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
    const [ todo, setTodo ] = useState("");
    const dispatch = useDispatch();

    const addTodo = e => {
        e.preventDefault();
        dispatch({type : "ADDTODO",payload : { title : todo, done : false }})
        setTodo("")
    }

    return (
        <div className="formContainer">
            <div className="formName">Todo Application with Redux</div>
            <form onSubmit={addTodo}>
                <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} required placeholder="Enter a Todo"/>
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
}
