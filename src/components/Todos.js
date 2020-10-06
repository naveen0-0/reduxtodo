import React,{ useEffect } from 'react';
import { useSelector } from 'react-redux'

export default function Todos() {

    let todos = useSelector(state=>state.todos);

    return (
        <div className="todosContainer">
            {todos.map((todo,index)=>(
                <div className="todo">
                    <div>{index}</div>
                    <div>{todo.title}</div>
                    <div><input type="checkbox" checked={todo.done}/></div>
                </div>
            ))}
        </div>
    )
}
