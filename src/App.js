import React from 'react'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import './App.css'

export default function App() {
    return (
        <div>
            <TodoForm/>
            <Todos/>
        </div>
    )
}
