// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

@observer
class search extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    this.props.store.updateQuery(this.state.value.trim())
    this.props.store.updateResults(this.props.store.query)
    event.preventDefault()
  }

  render () {
    const { state } = this.props.store
    return (
      <div className={ state === null ? 'container-search' : 'container-search height-auto' }>
        <div className="form-search full-size">
          <h1 className={state === null ? '' : 'hide' } >Search a chuck norris's fact ?</h1>
          <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.value} onChange={this.handleChange} className="input-text-form-search" required/>
            <button className="button-form-search" type="submit">Submit your search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default search
