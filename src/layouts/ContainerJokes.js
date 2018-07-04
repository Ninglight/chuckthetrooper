// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

/**
 * Components with response list of request
 * @observer : mobx going to observe data changes of store
 */

@observer
class result extends Component {
  render () {
    // Add some useful props from store
    const { results, state, query, error } = this.props.store
    // We apply different situation from state attribute

    switch (state) {
      // If our request return a error, we print it
      case 'error':
        return (
          <div className="container-result">
            <h1>Request not working <br/>({error.message})</h1>
          </div>
        )
      // During th request, we print a message for prevent the loading
      case 'pending':
        return (
          <div className="container-result">
            <h1>Loading...</h1>
          </div>
        )
      // When the result is done, we print list of result
      case 'done':
        return (
          <div className="container-result">
            <h1>Result for «{ query }»</h1>
            <ul className="block-list block-list-result">
              {results.map(item => (
                <a href={item.url} target="_blank" key={item.id}>
                  <li className="item-list">
                    <div className="img-item-list">
                      <img src={item.icon_url} alt="" width="60" height="60"/>
                    </div>
                    <div className="content-item-list">
                      <p>{item.value}</p>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )
      // The default case is at the started of the application, we just need to don't print list
      default:
        return null
    }
  }
}

export default result
