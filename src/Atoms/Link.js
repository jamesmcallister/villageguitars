import React from 'react'
import PropTypes from 'prop-types'

const Links = ({ url, children }) => {
  Links.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }
  return (
    <a href={url} className="link dim dark-green">
      {children}
    </a>
  )
}

export default Links
