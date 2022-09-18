import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {

    // Display a div with the task of the todo

    // Has an X to delete the ToDo
    //  - will call a function passed as props from parent

    render() {
        return (
            <div className="ToDo">
                <div className="ToDoDiv">{this.props.todovalue}</div>
                <div className="Edit">Edit</div>
                <div className="Delete">X</div>
            </div>
        )
    }
}

export default ToDo;