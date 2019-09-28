import SubMenusList from './submenus-list'
import ActivePartyList from './active-party-list'
import InactivePartyList from './inactive-party-list'
import GeneralDataWindow from './general-data-window'

import Window from '../window'
import Cursor from '../cursor'

import copy from '../../data/copy'

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

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

const StyledMenu = styled.div`
  padding: 4px;
  position: relative;
  width: inherit;
  height: inherit;
`

function useKeyPress (targetKey) {
  const [keyPressed, setKeyPressed] = useState(false)

  function downHandler ({ key }) {
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

const MainMenu = ({ onNavigate }) => {
  const input = {
    up: useKeyPress('ArrowUp'),
    down: useKeyPress('ArrowDown'),
    left: useKeyPress('ArrowLeft'),
    right: useKeyPress('ArrowRight'),
    confirm: useKeyPress('z'),
    cancel: useKeyPress('x')
  }

  const [cursor, setCursor] = useState('submenus')

  useEffect(() => {
    if (input.left) {
      setCursor('submenus')
    } else if (input.right) {
      setCursor('activeParty')
    }
  }, Object.values(input))

  return (<StyledMenu>
    <Window
      title={copy.window.help.title}
      yCentered
      x='0%' y='0%'
      width='70%' height='8%'
    >
      {copy.window.help.main.submenus.gf}
    </Window>
    <SubMenusList
      hasCursor={cursor === 'submenu'}
      submenus={submenuList}
    />
    <ActivePartyList
      party={activeParty}
      hasCursor={cursor === 'activeParty'}
    />
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
    <GeneralDataWindow
      {...generalData}
    />
    <Cursor x='0%' y='0%' />
  </StyledMenu>)
}

export default MainMenu
