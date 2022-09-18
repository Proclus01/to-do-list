import React, { Component } from 'react';
import ToDo from './ToDo.js';

class ToDoList extends Component {

    // Has state that contains all the ToDos
    constructor(props) {
        this.state = [
            {
                // We need an id, and a value
            }
        ]
    }

    // Render all the ToDo components from state
    render() {
        return (
            <div>
                <p>I will be the main component</p>
            </div>
        )
    }
}

export default ToDoList;