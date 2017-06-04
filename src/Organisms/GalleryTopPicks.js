import React from 'react'
import { Title, ImageInGallery } from '../Atoms'
import { Wrapper } from '../Molecules'

const GalleryTopPicks = ({ store, show, title }) => {
  const InstgramGalleryMap = Object.keys(store)
    .map(x => store[x])
    .map(id => id.fields)
    .filter(fields => fields.TopPick === true)
    .filter(fields => fields.DisplayOnWebSite === true)
    .slice(0, 4)
    .map((ImageData, i) =>
      <ImageInGallery key={i} ImageData={ImageData} show={show} />
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
