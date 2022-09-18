import React, { Component } from 'react';

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
            <form>
                <div>
                    <input 
                        type="text" 
                    />
                </div>

                <button>ADD TODO</button>
            </form>
        )
    }
}

export default NewToDoForm;