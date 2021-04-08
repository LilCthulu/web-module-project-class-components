import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChanges = e => {
        this.setState({
            ...this.State,
            newTodo: e.target.value
        })
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input type="text" value= {this.state.newTodo} onChange= {this.handleChanges} name= "todo" />
            <button>Add todo</button>
            </form> 
        )
    }

}


export default TodoForm;