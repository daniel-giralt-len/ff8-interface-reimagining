import React from 'react'
import styled from 'styled-components'
import copy from '../../data/copy'
import Window from '../window'

const StyledSubMenusList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const SubMenuItem = styled.li`
  ${({ hasCursor }) => hasCursor && 'background:red;'}
  padding: 3px 0px;
`

const SubMenusList = ({ submenus, cursor }) => {
  return (<Window
    x='72%'
    width='23%'
  >
    <StyledSubMenusList>
      {submenus.map((submenu) => {
        return (<SubMenuItem key={submenu} hasCursor={cursor === submenu}>
          {copy.window.submenus[submenu]}
        </SubMenuItem>)
      })}
    </StyledSubMenusList>
  </Window>)
}

export default SubMenusList
