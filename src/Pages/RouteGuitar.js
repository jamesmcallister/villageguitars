import React from 'react'
import GuitarDetails from '../Organisms/GuitarDetails'
import ReactGA from 'react-ga'
import { googleAnalytics } from '../env'

ReactGA.initialize(googleAnalytics)
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)

const RouteGuitar = ({ loading, ImageData, params }) => {
  if (loading) {
    return null
  } else return <GuitarDetails ImageData={ImageData} url={params.id} />
}

export default RouteGuitar
