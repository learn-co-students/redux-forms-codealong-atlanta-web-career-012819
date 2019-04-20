import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ``
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text"
                   onChange={this.handleChange}
                   value={this.state.text}>
            </input>
          </p>
          <input type="submit"></input>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default connect()(CreateTodo);
