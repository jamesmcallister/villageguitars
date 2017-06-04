import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ children }) => {
  Text.propTypes = {
    children: PropTypes.any.isRequired
  }
  return (
    <p className="f4 f5-m lh-copy measure center pl2 f4-ns">
      {children}
    </p>
  )
}

export default Text
