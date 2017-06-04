import React, { Component } from 'react'
import Proclamation from '../Organisms/Proclamation'
import GalleryTopPicks from '../Organisms/GalleryTopPicks'
import GalleryTags from '../Organisms/GalleryTags'
import { TagsList } from '../Helper'
import Content from '../Organisms/Content'
import ReactGA from 'react-ga'
import { googleAnalytics } from '../env'

ReactGA.initialize(googleAnalytics)
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)

class App extends Component {
  render({ store, loading } = this.props) {
    const GalleryWithTags = TagsList(store).map((x, key) =>
      <GalleryTags key={key} TagToDisplay={x} store={store} loading={loading} />
    )
    document.title = `Village Guitars Wingham`
    return (
      <div>
        <div>
          {loading ? null : <Proclamation store={store} />}
          {loading
            ? null
            : <GalleryTopPicks
                title="Top Picks"
                store={store}
                loading={loading}
              />}
        </div>
        <Content />
        {loading ? null : GalleryWithTags}
      </div>
    )
  }
}

export default App
