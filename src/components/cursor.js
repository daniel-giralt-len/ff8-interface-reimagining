import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  position: absolute;
  image-rendering: pixelated;
  ${({ x }) => x && `margin-left: ${x};`}
  ${({ y }) => y && `margin-top: ${y};`}
  ${({ isSubCursor }) => isSubCursor && 'opacity: 0.6;'}
`

const Cursor = ({ isSubCursor, x, y }) => {
  return (<StyledImage
    isSubCursor={isSubCursor}
    src='./cursor.png'
    x={x}
    y={y}
  />)
}

Cursor.propTypes = {
  isSubCursor: PropTypes.bool,
  title: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string
}

Cursor.defaultProps = {
  isSubCursor: false
}

export default Cursor
