import React from 'react'
import styled from 'styled-components'
import MainMenu from './main-menu'
import screenSize from '../data/screen-size'

const ScreenStyled = styled.div`
  background: #000;
  width: ${screenSize.width}px;
  height: ${screenSize.height}px;
  color: #FFF;
`

const Screen = () => {
  const menus = {
    main: MainMenu,
    junction: 'Junction TBD',
    item: 'Item TBD',
    magic: 'Magic TBD',
    gf: 'GF TBD',
    ability: 'Ability TBD',
    switch: 'Switch TBD',
    card: 'Card TBD',
    config: 'Config TBD',
    tutorial: 'Tutorial TBD',
    save: 'Save TBD',
  }
  
  const getCurrentMenuComponent = newMenuId => {
    if(!Object.keys(menus).includes(newMenuId)) {
      throw new Error(`no such menu ${newMenuId}`)
    }
    return menus[newMenuId]
  }
  
  const CurrentMenuComponent = getCurrentMenuComponent('main')
  
  return (<ScreenStyled>
      <CurrentMenuComponent 
         onNavigate={getCurrentMenuComponent}
        />
    </ScreenStyled>)
}


export default Screen