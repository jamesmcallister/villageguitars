import React from 'react'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-46080424-2')
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)

const Error404 = () => {
  document.title = `Village Guitars Wingham - 404`
  return (
    <div>
      Sorry looks like this item has been sold. Why not have a browse at are
      current stock.
    </div>
  )
}

export default Error404
