import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'whatwg-fetch'
import { SECRET_CODE, SECRET_PATH } from './env'
import Header from './Organisms/Header'
import RouteHome from './Pages/RouteHome'
import RouteGuitar from './Pages/RouteGuitar'
import Error404 from './Pages/404'

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
      store: []
    }
    this.fetchStore = this.fetchStore.bind(this)
  }

  fetchStore() {
    fetch(request).then(resp => resp.json()).then(resp => {
      this.setState({ loading: false, store: resp.records })
    })
  }
  componentWillMount() {
    this.fetchStore()
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
              render={({ match }) =>
                <RouteHome
                  store={this.state.store}
                  {...match}
                  loading={this.state.loading}
                />}
            />
            <Route
              path="/:id"
              render={({ match }) =>
                <RouteGuitar
                  ImageData={this.state.store}
                  {...match}
                  loading={this.state.loading}
                />}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
