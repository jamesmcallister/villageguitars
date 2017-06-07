import React from 'react'
import { Title, ImageInGallery } from '../Atoms'
import { Wrapper } from '../Molecules'
import { displayOnWebSite } from '../Helper'

const GalleryWithTags = ({ store, TagToDisplay, show, lazyload }) => {
  const InstgramGalleryMap = displayOnWebSite(store)
    .filter(items => items.Tags.includes(TagToDisplay))
    .map((ImageData, i) =>
      <ImageInGallery
        key={i}
        ImageData={ImageData}
        show={show}
        lazyload={lazyload}
      />
    )

  return (
    <Wrapper>
      <Title title={TagToDisplay} />
      <div className="cf pa2 tc">
        {InstgramGalleryMap}
      </div>
    </Wrapper>
  )
}

export default GalleryWithTags
