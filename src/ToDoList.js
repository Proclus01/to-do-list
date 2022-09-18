import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo.js';
import NewToDoForm from './NewToDoForm.js';
import { v4 as uuidv4 } from 'uuid';

class ToDoList extends Component {

    // Has state that contains all the ToDos
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // Array of objects containing id and value, added from NewToDoForm
            ]
        }
        this.create = this.create.bind(this);
    }

    create(newToDo) {
        this.setState({
            todos: [...this.state.todos, newToDo]
        })
    }

    // Render all the ToDo components from state
    render() {

        const todos = this.state.todos.map(
            todo => (
                <ToDo 
                    todovalue={todo.value}
                    key={todo.id}
                />
            )
        )

        return (
            <div className="main-container">
                <h1 id="title">To Do List!</h1>
                <h3 id="subtitle">A Simple React To-Do List App</h3>

                <div>
                    {todos}
                </div>
                
                <div>
                    <NewToDoForm 
                        createToDo={this.create}
                    />
                </div>
            </div>
        )
    }
}

export default ToDoList;