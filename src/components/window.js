import React from 'react'
import styled from 'styled-components'
import screenSize from '../data/screen-size'
import font from '../data/font'
import PropTypes from 'prop-types'

const StyledWindowTitle = styled.div`
  color: #AFAFAF;
  ${font.size.tiny}
  margin-left: 5px;
  line-height: 0px;
`

const StyledWindowChildren = styled.div`
  padding: 2px 4px;
  font-variant-numeric: tabular-nums;
  ${({ xCentered, yCentered }) => {
    if (xCentered || yCentered) {
      return `
        display: flex;
        ${xCentered ? 'justify-content: center;' : ''}
        ${yCentered ? 'align-items: center;' : ''}
        height: -webkit-fill-available;
      `
    }
  }}
`

const StyledWindow = styled.div`
  position: absolute;
  background: linear-gradient(to right, #404040, #636363);
  border: 1px double #232323;
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ x }) => x && `margin-left: ${x};`}
  ${({ y }) => y && `margin-top: ${y};`}
`

const Window = ({
  title,
  x,
  y,
  width,
  height,
  children,
  xCentered,
  yCentered
}) => {
  // since vertical margins in % are calculated off of width,
  // this calculates y% off of height
  const heightBasedY = (y && y.endsWith('%'))
    ? `${parseFloat(y.slice(0, -1)) * screenSize.height / screenSize.width}%`
    : y
  return (<StyledWindow
    x={x}
    y={heightBasedY}
    width={width}
    height={height}
  >
    {title &&
      (<StyledWindowTitle>{title}</StyledWindowTitle>)
    }
    <StyledWindowChildren xCentered={xCentered} yCentered={yCentered}>
      {children}
    </StyledWindowChildren>
  </StyledWindow>)
}

Window.propTypes = {
  title: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  xCentered: PropTypes.bool,
  yCentered: PropTypes.bool
}

Window.defaultProps = {
  xCentered: false,
  yCentered: false
}

export default Window
