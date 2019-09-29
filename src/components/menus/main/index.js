import SubMenusList from './submenus-list'
import ActivePartyList from './active-party-list'
import InactivePartyList from './inactive-party-list'
import GeneralDataWindow from './general-data-window'
import cursorData from './cursor-layout'

import Menu from '../generic-menu'
import Window from '../../window'

import React, { Fragment } from 'react'

const generalData = {
  playTime: {
    hours: 56,
    minutes: 47
  },
  rank: '29',
  gil: '123100'
}
const activeParty = [
  {
    name: 'Zell',
    level: 9,
    hp: 5,
    maxHp: 102
  },
  {
    name: 'Squall',
    level: 100,
    hp: 9999,
    maxHp: 9999
  },
  {
    name: 'Irvine',
    level: 23,
    hp: 0,
    maxHp: 3492
  }
]

const inactiveParty = [
  {
    name: 'Selphie',
    level: 13,
    hp: 0,
    maxHp: 5348
  },
  {
    name: 'Quistis',
    level: 100,
    hp: 4812,
    maxHp: 6543
  },
  {
    name: 'Rinoa',
    level: 15,
    hp: 200,
    maxHp: 915
  }
]

const submenuList = [
  'junction',
  'item',
  'magic',
  'gf',
  'ability',
  'switch',
  'card',
  'config',
  'tutorial',
  'save'
]

const MainMenu = ({ onNavigate, cursor, cursorLayout, copy }) => {
  const getCursor = listPosition => cursor.x === listPosition && cursorLayout[cursor.x][cursor.y]

  return (<Fragment>
    <Window
      title={copy.window.help.title}
      yCentered
      x='0%' y='0%'
      width='70%' height='8%'
    >
      {copy.window.help.main.submenus.gf}
    </Window>
    <InactivePartyList
      party={inactiveParty}
    />
    <Window
      y='85%'
      width='70%' height='8%'
      yCentered
    >
       Island Closest to Hell
    </Window>
    <ActivePartyList
      party={activeParty}
      cursor={getCursor(0)}
    />
    <SubMenusList
      submenus={submenuList}
      cursor={getCursor(1)}
    />
    <GeneralDataWindow
      {...generalData}
    />
  </Fragment>)
}

export default Menu({
  MenuComponent: MainMenu,
  cursorData
})
