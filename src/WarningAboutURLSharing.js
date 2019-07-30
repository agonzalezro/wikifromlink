import React, { Component } from 'react'

class WarningAboutURLSharing extends Component {
    render() {
        return <div className="alert alert-warning" role="alert">
            <i className="fas fa-anchor"></i> Remember to copy the latest URL (it will change anytime you add something) to share the latest changes.
        </div>
    }
}

export default WarningAboutURLSharing