import React, { Component } from 'react';
import './NewToDoForm.css';

class NewToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { formValue: "" }
    }

    // onSubmit will create a new ToDo
    //  - call a function passed as props from parent
    handleSubmit(evt) {
        // Stop the page from refreshing on form submission
        evt.preventDefault();
    }

    // Render a form with one text input
    render() {
        return (
            <div className="NewToDoForm">

                <form onSubmit={this.handleSubmit}>
                    <div className="InputForm">
                        <input 
                            type="text" 
                        />
                    </div>

                    <button>ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default NewToDoForm;