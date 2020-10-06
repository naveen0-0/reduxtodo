import React from 'react';
import { useSelector } from 'react-redux'

export default function Todos() {

    let todos = useSelector(state=>state.todos);

    const changeTodoDone = todo => {
        console.log(todo)
    }

    return (
        <div className="todosContainer">
            {todos.map((todo,index)=>(
                <div className="todo" key={index}>
                    <div className="number">{index}</div>
                    <div className="todoName">{todo.title}</div>
                    <div className="todoDone"><input type="checkbox" checked={todo.done} onChange={()=>{changeTodoDone(todo)}}/></div>
                </div>
            ))}
        </div>
    )
}
