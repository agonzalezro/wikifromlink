import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
        "history": [
            {
                "date": "",
                "body": "",
            }
        ],
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { value } = event.target
  
    this.setState({
        "history": [
            {
                "date": Date.now(),
                "body": value,
            }
        ]
    })
  }

  submitForm = event => {
      event.preventDefault()

    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { history } = this.state;
  
    return (
        <div className="row mt-3">
        <form className="col-5 offset-3">
          <div className="form-group">
            <textarea className="form-control" name="body" rows="4" onChange={this.handleChange} value={history[0].body}></textarea>
          </div>
          <input className="btn btn-primary" onClick={this.submitForm} value="Submit" type="button"></input>
        </form>
      </div>
    );
  }
}

export default Form;