import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line no-unused-vars

// For make a fetch api request
import fetch from 'node-fetch'
// Modules from Mobx
import { observable, action, runInAction } from 'mobx'


/**
 * Classe permettant de gerer les Chuck norris's facts
 */
class JokesStore {
  @observable query = ''
  @observable state = null // "pending" / "done" / "error"
  results = {}
  error = null

  /**
   * update query
   * @param query to replace query attribute
   */
  updateQuery (query) {
    this.query = query
  }

  /**
   * Update results with api request
   * @param query to resquest api
   */
  @action async updateResults (query) {

    // Define api url
    const apiRequest = 'https://api.chucknorris.io/jokes/search?query='
    let queryJokes = apiRequest.concat(query)

    // Change state for prevent application
    this.state = 'pending'

    // Use a try-catch structure for manipulate extern data
    try {
      // await going to wait for the response of the promise of our fetch api resquest
      const jokes = await fetch(queryJokes).then(res => res.json())

      // RunInAction is visibly a good pratice for a async await structure
      runInAction(() => {
        this.state = 'done'
        this.results = jokes.result
      })
    } catch (error) {
      // RunInAction is visibly a good pratice for a async await structure
      runInAction(() => {
        this.error = error
        this.state = 'error'
      })
    }
  }
}

export default JokesStore
