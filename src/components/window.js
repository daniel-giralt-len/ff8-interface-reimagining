import React from 'react'
import styled from 'styled-components'
import screenSize from '../data/screen-size'
import font from '../data/font'

const StyledWindowTitle = styled.div`
color: #AFAFAF;
${font.size.tiny}
margin-left: 5px;
line-height: 0px;
`

const StyledWindowChildren = styled.div`
padding: 2px 4px;
font-variant-numeric: tabular-nums;
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

const Window = ({ title, x, y, width, height, children }) => {
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
    <StyledWindowChildren>
      {children}
    </StyledWindowChildren>
  </StyledWindow>)
}

export default Window
