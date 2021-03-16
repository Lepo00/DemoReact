import React, { Component } from 'react'

export default class Form extends Component {
    state={
        value:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.value.trim()==="")
            alert("Write something");
        else{
            this.props.submit(this.state.value);
            this.setState({
                value:''
            })
        }
    }

    onChangeText=(e)=>{
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" value={this.state.value} placeholder="Todo's description" onChange={this.onChangeText}/>
            </form>
        )
    }
}

