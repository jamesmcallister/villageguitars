import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ TagToDisplay, children }) => {
  Wrapper.propTypes = {
    children: PropTypes.any.isRequired
  }
  return (
    <section
      aria-label={TagToDisplay}
      className="pt3 pl3 pr3 tl pa1-ns items-center">
      <div className="cf pa2 tl">
        {children}
      </div>
    </section>
  )
}

export default Wrapper
