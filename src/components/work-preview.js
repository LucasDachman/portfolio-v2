import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const WorkPreview = ({title, path, brief, fluid}) => (
  <Link to={path}className='work-preview'>
    <Img fluid={fluid} alt={title} />
    <p>{brief}</p>
  </Link>
)

WorkPreview.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
}


export default WorkPreview;