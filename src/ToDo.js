import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.todovalue
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    // Has an X to delete the ToDo
    //  - will call a function passed as props from parent
    handleRemove() {
        this.props.removeToDo(this.props.id);
    }

    // Display the edit form
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(evt) {
        evt.preventDefault();

        // take new task data and pass up to parent
        this.props.updateToDo(this.props.id, this.state.task);

        // reset the isEditing flag in our state
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleChange(evt) {
        this.setState({
            // Update our state using computed properties
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {

        let result;

        // Conditionally render either the todo component or a form depending on if the edit button is clicked
        if (this.state.isEditing) { 
            // Display the form to edit the todo component
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            value={this.state.task} 
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else { 
            // Display a div with the task of the todo
            result = (
                <div className="ToDo">
                    <li className="ToDoDiv">{this.props.todovalue}</li>
                    <button className="Edit" onClick={this.toggleForm}>Edit</button>
                    <button className="Delete" onClick={this.handleRemove}>X</button>
                </div>
            )
        }

        return (
            result
        )
    }
}

export default ToDo;