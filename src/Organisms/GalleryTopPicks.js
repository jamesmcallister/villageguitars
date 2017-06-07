import React from 'react'
import { Title, ImageInGallery } from '../Atoms'
import { Wrapper } from '../Molecules'
import { displayOnWebSite } from '../Helper'

const GalleryTopPicks = ({ store, show, title, lazyload }) => {
  const InstgramGalleryMap = displayOnWebSite(store)
    .filter(fields => fields.TopPick === true)
    .slice(0, 4)
    .map((ImageData, i) =>
      <ImageInGallery
        key={i}
        ImageData={ImageData}
        show={show}
        lazyload={lazyload}
      />
    )

  const ShowTitle = <Title title={title} />

  return (
    <Wrapper>
      {store >= 0 ? null : ShowTitle}
      <div className="cf pa2 tc">
        {InstgramGalleryMap}
      </div>
    </Wrapper>
  )
}

export default GalleryTopPicks
