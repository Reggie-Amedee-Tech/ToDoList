import React from "react";
import './TodoList.css';

interface ToDoListProps {
    items: {id: number, text: string}[];
    deleteToDoFunction: Function;
}

const ToDoList: React.FC<ToDoListProps> = props => {
    return props.items.length ? <ul>
    {props.items.map(todo => {
        return <ul key={todo.id}>
            <li>{todo.text}</li>
            <button onClick={() => {
                props.deleteToDoFunction(todo.id)
            }}>Delete</button>
        </ul>
        
        
    })}
</ul> : <p>Please add todo!</p>
}

export default ToDoList;