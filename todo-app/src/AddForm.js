import React, { Component } from 'react'

class AddForm extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state)
        this.setState({ content: ''})
    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={ this.handleChange } value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddForm