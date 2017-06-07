import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'whatwg-fetch'
import { SECRET_CODE, SECRET_PATH } from './env'
import Header from './Organisms/Header'
import RouteHome from './Pages/RouteHome'
import RouteGuitar from './Pages/RouteGuitar'
import Error404 from './Pages/404'
import moment from 'moment'

const request = new Request(
  `https://api.airtable.com/v0/${SECRET_PATH}/websitegallery?maxRecords=200&view=Grid%20view`,
  {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${SECRET_CODE}`
    })
  }
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      lazyload: true,
      store: {}
    }
  }

  fetchNewData() {
    fetch(request).then(resp => resp.json()).then(resp => {
      this.setState({
        loading: false,
        lazyload: true,
        store: resp.records
      })
      localStorage.setItem('vg-store', JSON.stringify(resp.records))
      localStorage.setItem('dataAge', JSON.stringify(Date.now()))
    })
  }

  readLocalStorage() {
    this.setState({
      loading: false,
      lazyload: false,
      store: JSON.parse(localStorage.getItem('vg-store'))
    })
  }

  ifOldShallIUpDate() {
    const lSTime = parseInt(localStorage.getItem('dataAge'), 10)
    return moment(lSTime).isAfter(moment().subtract(5, 'minute'))
  }

  componentWillMount() {
    localStorage.length === 0 ? this.fetchNewData() : this.readLocalStorage()
    !this.ifOldShallIUpDate() && this.fetchNewData()
  }

  render() {
    return (
      <Router>
        <div className="">
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={({ match }) => <RouteHome {...this.state} {...match} />}
            />
            <Route
              path="/:id"
              render={({ match }) => <RouteGuitar {...this.state} {...match} />}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
