import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from '../Atoms'
import LoadImages from 'react-lazy-load'
import { safeUrl } from '../Helper'

const ImageInGallery = ({ ImageData }) => {
  ImageInGallery.PropTypes = {
    'ImageData.Name': PropTypes.object.isRequired
  }

  const url = safeUrl(ImageData.Name)
  return (
    <LoadImages
      offsetVertical={600}
      key={url}
      className="fl w-50 w-25-m w-20-l pa2">
      <Link to={url} className="db link dim tc">
        <Image {...ImageData} />
      </Link>
    </LoadImages>
  )
}

export default ImageInGallery