import React from 'react';
import { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';
import {ToDoModel} from './ToDo.model'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoModel[]>([])

  const addToDo = (text: string) => {
    console.log(text)
    setTodos(prevToDos => [
      ...prevToDos, {id: Math.random() * 10, text: text}
    ])
  }
  const deleteToDo = (itemId: number) => {
    console.log(itemId)
    setTodos(prevToDos => {
      return todos.filter(todo => todo.id !== itemId)
    })
  }
  return <div className='App'>
    <NewTodo addToDoFunction={addToDo}/>
    <ToDoList items={todos} deleteToDoFunction={deleteToDo}/>
  </div>
}

export default App;
