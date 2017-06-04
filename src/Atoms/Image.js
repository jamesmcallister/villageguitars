import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ Name, Attachments }) => {
  Image.PropTypes = {
    Name: PropTypes.string.isRequired,
    Attachments: PropTypes.object.isRequired
  }
  const InstagramImgURL = `https://scontent.cdninstagram.com/t51.2885-15/e35/${Attachments[0]
    .filename}`

  const CDN = imgToResize => {
    const imageWitdh = `640`
    const options = `w_${imageWitdh},f_auto`
    const cdnBaseUrl = `https://res.cloudinary.com/villageguitars/image/fetch`
    return `${cdnBaseUrl}/${options}/${imgToResize}`
  }
  return (
    <div
      role="img"
      aria-label={Name}
      style={{
        paddingBottom: '100%',
        backgroundSize: 'cover',
        backgroundImage: `url(${CDN(InstagramImgURL)})`
      }}
    />
  )
}

export default Image
