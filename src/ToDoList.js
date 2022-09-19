import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo.js';
import NewToDoForm from './NewToDoForm.js';

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
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newToDo) {
        this.setState({
            todos: [...this.state.todos, newToDo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(
                todo => todo.id !== id
            )
        })
    }

    // Update our todos state
    update(id, updatedTask) {
        // Get our current list
        const updatedTodos = this.state.todos.map(
            todo => {
                // If there is an id match, update that todo's value with the updated task
                if (todo.id === id) {
                    return {...todo, value: updatedTask}
                }
                return todo;
            }
        );

        this.setState({ todos: updatedTodos })
    }

    toggleCompletion(id) {
        // Get our current list
        const updatedTodos = this.state.todos.map(
            todo => {
                // If there is an id match, update that todo's value with the updated task
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            }
        );

        this.setState({ todos: updatedTodos })
    }

    // Render all the ToDo components from state
    render() {

        const todos = this.state.todos.map(
            todo => (
                <ToDo 
                    todovalue={todo.value}
                    id={todo.id}
                    key={todo.id}
                    completed={todo.completed}
                    removeToDo={
                        this.remove
                    }
                    updateToDo={this.update}
                    toggleToDo={this.toggleCompletion}
                />
            )
        )

        return (
            <div>
                <h1>To Do List!</h1>
                <h3>A Simple React To-Do List App</h3>

                <ul>
                    {todos}
                </ul>
                
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