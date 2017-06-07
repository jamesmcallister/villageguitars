import React from 'react'
import { Title, ImageInGallery } from '../Atoms'
import { Wrapper } from '../Molecules'
import { displayOnWebSite } from '../Helper'

const GalleryWithTags = ({ store, TagToDisplay, show }) => {
  const InstgramGalleryMap = displayOnWebSite(store)
    .filter(items => items.Tags.includes(TagToDisplay))
    .map((ImageData, i) =>
      <ImageInGallery key={i} ImageData={ImageData} show={show} />
    )

  return (
    <Wrapper aria-label={TagToDisplay}>
      <Title title={TagToDisplay} />
      <div className="cf pa2 tc">
        {InstgramGalleryMap}
      </div>
    </Wrapper>
  )
}

export default GalleryWithTags
