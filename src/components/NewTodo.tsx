import React, { useRef } from "react";
import './NewTodo.css'

interface AddToDoProp {
    addToDoFunction: Function
}

const NewTodo: React.FC<AddToDoProp> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.addToDoFunction(enteredText)
    }
    return <form onSubmit={toDoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text"  id="todo-text" ref={textInputRef}/>
            <button type="submit">Add</button>
        </div>
    </form>
}

export default NewTodo