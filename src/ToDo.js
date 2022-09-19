import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    // Display a div with the task of the todo

    // Has an X to delete the ToDo
    //  - will call a function passed as props from parent
    handleRemove() {
        this.props.removeToDo(this.props.id)
    }

    render() {
        return (
            <div className="ToDo">
                <li className="ToDoDiv">{this.props.todovalue}</li>
                <button className="Edit">Edit</button>
                <button className="Delete" onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default ToDo;