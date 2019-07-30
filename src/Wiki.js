import React, { Component } from 'react'

const ReactMarkdown = require('react-markdown')

const WikiBody = props => {
  const items = props.items.map((item, index) => {
    return (
      <div className="card" key={index} id={item.id}>
        <div className="card-body">
          <ReactMarkdown source={item.history[0].body} />
          {/* <button className="btn btn-link" onClick={() => props.removeItem(item.id)}><i className="fas fa-edit"></i></button> */}
          {/* <a className="btn btn-link right float-right" href={"#" + item.id}><i className="fas fa-hashtag"></i></a> */}
          <button className="btn btn-link right float-right" onClick={() => props.removeItem(item.id)}><i className="fas fa-trash"></i></button>
        </div>
      </div>
    )
  })

  return <div className="container">{items}</div>
}

class Wiki extends Component {
  render() {
    const { items, removeItem } = this.props

    return (
      <WikiBody items={items} removeItem={removeItem} />
    )
  }
}

export default Wiki