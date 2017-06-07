import React from 'react'
import GuitarDetails from '../Organisms/GuitarDetails'
import ReactGA from 'react-ga'
import { googleAnalytics } from '../env'

if (!process.env.NODE_ENV === 'development') {
  ReactGA.initialize(googleAnalytics)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  console.log('loading analytics')
}
// window.scrollTo(0, 0)
const RouteGuitar = ({ loading, store, params }) => {
  if (loading) {
    return null
  } else return <GuitarDetails store={store} url={params.id} />
}

export default RouteGuitar
