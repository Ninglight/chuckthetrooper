// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

/**
 * Components with input for request
 * @observer : mobx going to observe data changes of store
 */
@observer
class search extends Component {
  /**
   * Constructor
   * @param props data from parent component
   */
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Input value changes
   * @param event from form
   */
  handleChange (event) {
    // Update event value
    this.setState({value: event.target.value})
  }

  /**
   * Form value submit
   * @param event from form
   */
  handleSubmit (event) {
    // Update Query for prepare a new api request
    this.props.store.updateQuery(this.state.value.trim())

    // Make a new api request
    this.props.store.updateResults(this.props.store.query)
    event.preventDefault()
  }

  render () {
    // Collect state from store properties
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
