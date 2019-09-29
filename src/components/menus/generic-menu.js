import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import useKeyPress from '../../hooks/use-key-press'
import usePileState from '../../hooks/use-pile-state'
import PropTypes from 'prop-types'

import copy from '../../data/copy'

const mid = (n1, n2, n3) => n1 + n2 + n3 - Math.min(n1, n2, n3) - Math.max(n1, n2, n3)

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
    initialCursor,
    initialSubLayouts
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
    const [subcursors, , pushSubcursor, popSubcursor] = usePileState([])
    const [, getCurrentSubLayout, , popSubLayout] = usePileState(initialSubLayouts)

    useEffect(() => {
      let { x, y } = cursor
      const currentCursor = cursorLayout[getCurrentSubLayout()][cursor.x][cursor.y]
      if (input.confirm) {
        if (currentCursor.action === 'push-cursor') {
          pushSubcursor(currentCursor.label)
          // pushSubLayout(currentCursor.label)
        }
        if (currentCursor.action === 'pop-cursor') {
          popSubcursor()
          popSubLayout()
        }
        return
      } else if (input.cancel) {
        popSubcursor()
        return
      } else if (input.left) {
        x -= 1
      } else if (input.right) {
        x += 1
      } else if (input.up) {
        y -= 1
      } else if (input.down) {
        y += 1
      }
      x = mid(0, x, cursorLayout[getCurrentSubLayout()].length - 1)
      x === cursor.x
        ? y = mid(0, y, cursorLayout[getCurrentSubLayout()][x].length - 1)
        : y = 0 // reset list position to 0 if active list changes
      setCursor({ x, y })
    }, Object.values(input))

    return (
      <StyledMenu>
        <MenuComponent
          copy={copy}
          cursor={cursorLayout[getCurrentSubLayout()][cursor.x][cursor.y].label}
          subcursors={subcursors}
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
