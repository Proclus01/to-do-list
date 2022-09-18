import React, { Component } from 'react';
import ToDo from './ToDo.js';
import NewToDoForm from './ToDo.js';
import { v4 as uuidv4 } from 'uuid';

class ToDoList extends Component {

    // Has state that contains all the ToDos
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // Array of objects containing id and value
                {id: uuidv4(), value: "I'm a to-do item!"}
            ]
        }
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