import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  position: absolute;
  image-rendering: pixelated;
  ${({ x }) => x && `margin-left: ${x};`}
  ${({ y }) => y && `margin-top: ${y};`}
`

const Cursor = ({ x, y }) => {
  return (<StyledImage x={x} y={y} src='./cursor.png' />)
}

Cursor.propTypes = {
  title: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string
}

export default Cursor
