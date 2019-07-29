import React, { Component } from 'react'

const NoContentBody = props => {
    if (props.items.length > 0) {
        return null
    }

    return <div className="alert alert-info" role="alert">
        <i className="fas fa-eye-slash"></i> Nothing to see here, you can use the form below to create content.
    </div>
  }

class NoContent extends Component {
    render() {
      return <NoContentBody items={this.props.items} />
    }
  }

export default NoContent