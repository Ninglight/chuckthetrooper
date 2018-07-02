// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

class search extends Component {
  render () {
    return (
      <div className="container-search">
        <div className="form-search full-size">
          <h1>Search a new story of chuck norris ?</h1>
          <form action="POST">
            <input className="input-text-form-search" type="text"/>
            <button className="button-form-search" type="submit">Submit your search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default search
