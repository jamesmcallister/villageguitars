import React, { Component } from 'react'
import Proclamation from '../Organisms/Proclamation'
import GalleryTopPicks from '../Organisms/GalleryTopPicks'
import GalleryTags from '../Organisms/GalleryTags'
import { TagsList } from '../Helper'
import Content from '../Organisms/Content'
import ReactGA from 'react-ga'
import { googleAnalytics } from '../env'

if (!process.env.NODE_ENV === 'development') {
  ReactGA.initialize(googleAnalytics)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  console.log('loading analytics')
}

class App extends Component {
  render({ store, loading, lazyload } = this.props) {
    const GalleryWithTags = TagsList(store).map((x, key) =>
      <GalleryTags
        key={key}
        TagToDisplay={x}
        store={store}
        loading={loading}
        lazyload={lazyload}
      />
    )
    document.title = `Village Guitars Wingham`
    return (
      <div>
        <div>
          {loading ? null : <Proclamation {...this.props} />}
          {loading
            ? null
            : <GalleryTopPicks title="Top Picks" {...this.props} />}
        </div>
        <Content />
        {loading ? null : GalleryWithTags}
      </div>
    )
  }
}

export default App
