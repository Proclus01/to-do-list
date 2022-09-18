import React, { Component } from 'react';

class ToDo extends Component {



    // Display a div with the task of the todo

    // Has an X to delete the ToDo
    //  - will call a function passed as props from parent

    render() {
        return (
            <div className="ToDo">
                <span>
                    <div>{this.props.value}</div>
                    <div>Edit</div>
                    <div>X</div>
                </span>
            </div>
        )
    }
}

export default ToDo;