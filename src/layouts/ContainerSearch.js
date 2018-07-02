// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

class search extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  handleSubmit (event) {
    if (this.state.value) {
      alert('A name was submitted: ' + this.state.value.trim()) // eslint-disable-line no-undef
    } else {
      console.log('ça marche pas')
    }
    event.preventDefault()
  }

  render () {
    return (
      <div className="container-search">
        <div className="form-search full-size">
          <h1>Search a new story of chuck norris ?</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} className="input-text-form-search"/>
            <button className="button-form-search" type="submit">Submit your search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default search
