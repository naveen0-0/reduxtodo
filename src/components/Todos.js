import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Todos() {
    const dispatch = useDispatch();

    let todos = useSelector(state => state.todos);

    const changeTodoDone = todo => {
        console.log(todo)
    }

    return(
        <div>
            Good
        </div>
    )

}
