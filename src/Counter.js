import React from 'react';
import './App.scss'

export default class Counter extends React.Component{
    state={
        number:0,
    }

    increment =()=>{
        this.setState({
            number:this.state.number+1
        })
    }

    render() {
        return (
            <div className="counter">
                <h3>Counter: {this.state.number}</h3>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}