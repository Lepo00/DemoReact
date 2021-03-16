import React, { Component } from 'react';
import Form from './Form.jsx';
import './App.scss'

const Todo =(props)=>{
    return(
        <div className="todo" style={{textDecoration: props.todo.completed? 'line-through':'' }}>
            {props.todo.name}
            <div>
                <button onClick={()=>props.completeTodo(props.i)}>Complete</button>
            </div>
        </div>
    )
}

class App extends Component {
    state={
        todos:[
            {name:"Learn react", completed: true},
            {name:"Learn react's class", completed: false},
            {name:"Learn react's functional components", completed: false},
            {name:"Learn react's hooks", completed: true},
            {name:"Learn react's router", completed: false},
        ]
    }

    addTodo=(todo)=>{
        //this.state.todos.push({name: todo, completed: false});
        this.setState({
            todos: [...this.state.todos, {name: todo}]
            //todos:  this.state.todos
        })
    }

    completeTodo=(i)=>{
        [...this.state.todos][i].completed=true;
        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        return (
            <div className="app">
                <div className="todo-list">
                    {this.state.todos.map((todo,i)=>(
                        <Todo key={i} todo={todo} i={i} completeTodo={this.completeTodo}/>
                    ))}
                    <Form submit={this.addTodo}/>
                </div>
            </div>
        )
    }
}
export default App;