import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = props => {
  Wrapper.propTypes = {
    children: PropTypes.any.isRequired
  }
  return (
    <section className="pt3 pl3 pr3 tl pa1-ns items-center">
      <div className="cf pa2 tl">
        {props.children}
      </div>
    </section>
  )
}

export default Wrapper
