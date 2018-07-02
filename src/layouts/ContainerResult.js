// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

class result extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  // AJAX call to API
  componentDidMount (query) {
    fetch('https://api.chucknorris.io/jokes/search?query=rifle') // eslint-disable-line no-undef
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.result
          })
        },
        // handle errors
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="container-result">
          <h1>Result for «Lorem ipsum»</h1>
          <ul className="list-result">
            {items.map(item => (
              <a href={item.url} target="_blank" key={item.id}>
                <li className="item-result">
                  <div className="img-item-result">
                    <img src={item.icon_url} alt="" width="60" height="60"/>
                  </div>
                  <div className="content-item-result">
                    <p>{item.value}</p>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default result
