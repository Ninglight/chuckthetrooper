import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line no-unused-vars

import fetch from 'node-fetch'
import { observable, action, runInAction } from 'mobx'

// Store for update Jokes
class JokesStore {
  @observable query = ''
  @observable state = null // "pending" / "done" / "error"
  results = {}
  error = null

  updateQuery (query) {
    this.query = query
  }

  // Action for update list of jokes
  @action async updateResults (query) {
    const apiRequest = 'https://api.chucknorris.io/jokes/search?query='
    let queryJokes = apiRequest.concat(query)
    console.log(queryJokes)

    this.state = 'pending'

    try {
      const jokes = await fetch(queryJokes).then(res => res.json())

      runInAction(() => {
        this.state = 'done'
        this.results = jokes.result
      })
    } catch (error) {
      runInAction(() => {
        this.error = error
        this.state = 'error'
      })
    }
  }
}

var store = window.store = new JokesStore()

export default store
