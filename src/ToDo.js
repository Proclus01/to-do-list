import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {

    // Display a div with the task of the todo

    // Has an X to delete the ToDo
    //  - will call a function passed as props from parent

    render() {
        return (
            <div className="ToDo">
                <div>{this.props.todovalue} Edit X</div>
            </div>
        )
    }
}

export default ToDo;