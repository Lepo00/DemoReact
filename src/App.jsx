import React, { useState } from 'react';
import Form from './Form.jsx';
import './App.scss'

const Todo = (props) => {
    return (
        <div className="todo" style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}>
            {props.todo.name}
            <div>
                <button onClick={() => props.completeTodo(props.i)}>Complete</button>
            </div>
        </div>
    )
}

const App = () => {
    const [todos, setTodos] = useState([
        { name: "Learn react", completed: true },
        { name: "Learn react's class", completed: false },
        { name: "Learn react's functional components", completed: false },
        { name: "Learn react's hooks", completed: true },
        { name: "Learn react's router", completed: false },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, { name: todo }]);
    }

    const completeTodo = (i) => {
        [...todos][i].completed = true;
        setTodos(todos);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) => (
                    <Todo key={i} todo={todo} i={i} completeTodo={completeTodo} />
                ))}
                <Form submit={addTodo} />
            </div>
        </div>
    )
}
export default App;