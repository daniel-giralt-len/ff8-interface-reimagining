import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  position: absolute;
  image-rendering: pixelated;
  ${({ x }) => x && `margin-left: ${x};`}
  ${({ y }) => y && `margin-top: ${y};`}
  width: 28px;
  height: 53px;
`

const idToUrl = {
  squall: './squall-portrait.png'
}

const Portrait = ({ character, x, y }) => {
  return (<StyledImage
    src={idToUrl[character]}
    x={x}
    y={y}
  />)
}

Portrait.propTypes = {
  character: PropTypes.string.isRequired,
  x: PropTypes.string,
  y: PropTypes.string
}

export default Portrait
