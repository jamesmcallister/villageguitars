import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../Atoms'

const Article = ({ title, children }) => {
  Article.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }
  return (
    <article aria-label={title}>
      <Title title={title} />
      {children}
    </article>
  )
}

export default Article
