import React, { Component } from 'react';
import './NewToDoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { formValue: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Data from our forms is being added to the data in this component's state
    handleChange(evt) {
        this.setState({
            // Update our state using computed properties
            [evt.target.name]: evt.target.value
        })
    }

    // onSubmit will create a new ToDo
    //  - call a function passed as props from parent
    handleSubmit(evt) {
        // Stop the page from refreshing on form submission
        evt.preventDefault();

        const newToDo = {...this.state, id: uuidv4()};

        this.setState({formValue: ""});
    }

    // Render a form with one text input
    render() {
        return (
            <div className="NewToDoForm">

                <form onSubmit={this.handleSubmit}>
                    <div className="InputForm">
                        <label id="label" htmlFor="NewToDo">New ToDo</label>
                        <input 
                            type="text"
                            name="formValue"
                            value={this.state.formValue}
                            onChange={this.handleChange}
                            id="inputForm" 
                        />
                    </div>

                    <button>ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default NewToDoForm;