import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import copy from '../../data/copy'

const mid = (n1, n2, n3) => n1 + n2 + n3 - Math.min(n1, n2, n3) - Math.max(n1, n2, n3)

const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
  return keyPressed
}

const StyledMenu = styled.div`
  padding: 4px;
  position: relative;
  width: inherit;
  height: inherit;
`

const Menu = ({
  MenuComponent,
  cursorData: {
    cursorLayout,
    initialCursor
  }
}) => {
  return (props) => {
    const input = {
      up: useKeyPress('ArrowUp'),
      down: useKeyPress('ArrowDown'),
      left: useKeyPress('ArrowLeft'),
      right: useKeyPress('ArrowRight'),
      confirm: useKeyPress('z'),
      cancel: useKeyPress('x')
    }

    const [cursor, setCursor] = useState(initialCursor)

    useEffect(() => {
      let { x, y } = cursor
      if (input.left) {
        x -= 1
      } else if (input.right) {
        x += 1
      } else if (input.up) {
        y -= 1
      } else if (input.down) {
        y += 1
      }
      x = mid(0, x, cursorLayout.length - 1)
      x === cursor.x
        ? y = mid(0, y, cursorLayout[x].length - 1)
        : y = 0 // reset list position to 0 if active list changes
      setCursor({ x, y })
    }, Object.values(input))

    return (
      <StyledMenu>
        <MenuComponent
          copy={copy}
          cursor={cursor}
          cursorLayout={cursorLayout}
          {...props}
        />
      </StyledMenu>
    )
  }
}

Menu.propTypes = {
  MenuComponent: PropTypes.element.isRequired,
  cursorData: PropTypes.shape({
    cursorLayout: PropTypes.arrayOf(PropTypes.array),
    initialCursor: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
  })
}

export default Menu
