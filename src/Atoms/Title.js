import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => {
  Title.defaultProps = {
    children: 'Amce Inc'
  }
  Title.propTypes = {
    title: PropTypes.string.isRequired
  }
  return (
    <h1 className="f3 f3-m f1-l fw4 black-90 mv3 pb2 ttc tracked">
      {title}
    </h1>
  )
}
export default Title
