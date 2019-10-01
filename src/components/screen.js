import React from 'react'
import styled from 'styled-components'
import MainMenu from './menus/main/index.js'
import GFMenu from './menus/gf/index.js'
import screenSize from '../data/screen-size'
import font from '../data/font'

const ScreenStyled = styled.div`
  background: #000;
  width: ${screenSize.width}px;
  height: ${screenSize.height}px;
  color: #FFF;
  ${font.size.medium}
`

const Screen = () => {
  const menus = {
    main: MainMenu,
    junction: 'Junction TBD',
    item: 'Item TBD',
    magic: 'Magic TBD',
    gf: GFMenu,
    ability: 'Ability TBD',
    switch: 'Switch TBD',
    card: 'Card TBD',
    config: 'Config TBD',
    tutorial: 'Tutorial TBD',
    save: 'Save TBD'
  }

  const getCurrentMenuComponent = newMenuId => {
    if (!Object.keys(menus).includes(newMenuId)) {
      throw new Error(`no such menu ${newMenuId}`)
    }
    return menus[newMenuId]
  }

  //const CurrentMenuComponent = getCurrentMenuComponent('main')
  const CurrentMenuComponent = getCurrentMenuComponent('gf')

  return (<ScreenStyled>
    <CurrentMenuComponent
      onNavigate={getCurrentMenuComponent}
    />
  </ScreenStyled>)
}

export default Screen
