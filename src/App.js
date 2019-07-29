import React, { Component } from 'react'
import Header from './Header'
import WarningAboutURLSharing from './WarningAboutURLSharing'
import NoContent from './NoContent.js'
import Wiki from './Wiki'
import Form from './Form'

class App extends Component {
  state = {
    wiki: {
      items: [],
    },
  }

  removeItem = indexToDelete => {
    const { wiki } = this.state
  
    wiki.items = wiki.items.filter((item, _) => {
           return item.id !== indexToDelete
        })

    this.setState(wiki)
    window.location.hash = "#"+btoa(JSON.stringify(this.state.wiki))
  }

  handleSubmit = item => {
    const { wiki } = this.state

    item.id = wiki.items.length + 1
    wiki.items.push(item)

    this.setState(wiki)
    window.location.hash = "#"+btoa(JSON.stringify(this.state.wiki))
  }

  componentDidMount() {
    const encodedWiki = window.location.hash.substring(1)

    if (encodedWiki.length > 0) {
      this.setState({
        wiki: JSON.parse(atob(encodedWiki))
      })
    }
  }

  render() {
    const { wiki } = this.state
    // const { characters } = this.state

    return (
      <div className="container">
        <Header />
        <WarningAboutURLSharing />
        <NoContent items={wiki.items} />
        <Wiki items={wiki.items} removeItem={this.removeItem}/>
        <Form handleSubmit={this.handleSubmit} />
        {/* <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} /> */}
      </div>
    )
  }
}

export default App
