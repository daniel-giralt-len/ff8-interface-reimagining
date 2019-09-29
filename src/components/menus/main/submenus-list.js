import React from 'react'
import styled from 'styled-components'
import copy from '../../../data/copy'
import Window from '../../window'
import Cursor from '../../cursor'

const StyledSubMenusList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const SubMenuItem = styled.li`
  ${({ hasCursor }) => hasCursor && 'background:red;'}
  padding: 3px 0px;
`

const SubMenusList = ({ submenus, cursor, subcursors }) => {
  return (<Window
    x='72%'
    width='23%'
  >
    <StyledSubMenusList>
      {submenus.map((submenu) => {
        return (<SubMenuItem key={submenu}>
          {subcursors.includes(submenu) && (<Cursor x='-30%' isSubCursor />)}
          {cursor === submenu && (<Cursor x='-30%' />)}
          {copy.window.submenus[submenu]}
        </SubMenuItem>)
      })}
    </StyledSubMenusList>
  </Window>)
}

export default SubMenusList
