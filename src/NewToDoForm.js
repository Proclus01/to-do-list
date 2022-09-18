import React, { Component } from 'react';
import './NewToDoForm.css';

class NewToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { formValue: "" }
    }

    // onSubmit will create a new ToDo
    //  - call a function passed as props from parent

    // Render a form with one text input

    render() {
        return (
            <div className="NewToDoForm">
                <form>
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