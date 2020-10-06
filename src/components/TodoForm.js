import React,{ useState } from 'react'

export default function TodoForm() {
    const [ todo, setTodo ] = useState("")

    const addTodo = e => {
        e.preventDefault();
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
