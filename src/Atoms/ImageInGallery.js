import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from '../Atoms'
import LoadImages from 'react-lazy-load'
import { safeUrl } from '../Helper'

const ImageInGallery = ({ ImageData, lazyload }) => {
  ImageInGallery.PropTypes = {
    'store.Name': PropTypes.object.isRequired,
    'lazyload.Name': PropTypes.object.isRequired
  }

  const url = safeUrl(ImageData.Name)

  const PlainImage = () =>
    <Link to={url} className="db link dim tc">
      <Image {...ImageData} />
    </Link>

  const LazyLoading = () =>
    <LoadImages offsetVertical={600} key={url}>
      <PlainImage />
    </LoadImages>

  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      {lazyload ? <PlainImage /> : <LazyLoading />}
    </div>
  )
}

export default ImageInGallery
