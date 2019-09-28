import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import copy from '../data/copy'
import Window from './window'
import font from '../data/font'

const StyledGeneralData = styled.div`
  ${font.size.small}
`

const StyledGeneralDataSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1px 0px;
`

const StyledMoneySpacer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const GeneralDataWindow = ({playTime, rank, gil}) => {
  return (<Window
        x='72%' y='78%'
        width='23%'
      >
        <StyledGeneralData>
          <StyledGeneralDataSpacer>
            <div>{copy.window.generalData.playTime}</div>
            <div>{playTime.hours}:{playTime.minutes}</div>
          </StyledGeneralDataSpacer>
          <StyledGeneralDataSpacer>
            <div>{copy.window.generalData.rank}</div>
            <div>{rank}</div>
          </StyledGeneralDataSpacer>
          <StyledMoneySpacer>
            <div>{gil}</div>
            <div>{copy.window.generalData.gilSign}</div>
          </StyledMoneySpacer>
        </StyledGeneralData>
      </Window>)
}

const StyledInactivePartyList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`
const StyledShortMember = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({isKO, isCritical}) => getMemberColorByStatus({isKO, isCritical})}
  margin: 1px 4px;
`

const StyledShortMemberStats = styled.div`
  margin-left: 1px;
  ${font.size.small}
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledShortMemberSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 2px;
`

const StyledShortMemberHpBar = styled.div`
  border-bottom: 1px solid red;
  width: ${({ratio}) => `${100*ratio}%`};
`

const ShortMember = (member) => {
    const {name, level, hp, maxHp} = member
    const hpRatio = hp/maxHp
    const isCritical = hpRatio < 0.25
    const isKO = hp === 0
    return (<StyledShortMember
                isCritical={isCritical}
                isKO={isKO}
              >
        <div>{name}</div>
        <StyledShortMemberStats>
          <StyledShortMemberSpacer>
            <div>{copy.window.party.level}</div>
            <div>{level}</div>
          </StyledShortMemberSpacer>
          <div>
            <StyledShortMemberSpacer>
              <div>{copy.window.party.hp}</div>
              <div>{hp}</div>
            </StyledShortMemberSpacer>
            <StyledShortMemberHpBar ratio={hpRatio} />
          </div>
        </StyledShortMemberStats>
      </StyledShortMember>)
  }

const InactivePartyList = ({party}) => {
  return (<Window
            x='1.25%' y='40%'
            width='67%' height='40%'
            >
      <StyledInactivePartyList>
        {party.map((member) => (<ShortMember {...member} />))}
      </StyledInactivePartyList>
    </Window>)
}

const ActivePartyList = ({party}) => {
  const [member0, member1, member2] = party
  
  return (
    <Fragment>
  <ActivePartyWindow
          position={0}
          member={member0}
        />
      <ActivePartyWindow
          position={1}
          member={member1}
        />
      <ActivePartyWindow
          position={2}
          member={member2}
        />
      </Fragment>
      )
}

const getMemberColorByStatus = ({isKO, isCritical}) => {
  if(isKO) {
    return 'grey'
  }
  if(isCritical){
    return 'yellow'
  }
  return 'inherit'
}

const StyledLongMember = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({isKO, isCritical}) => getMemberColorByStatus({isKO, isCritical})}
` 

const StyledLongMemberSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0px 2px;
`

const StyledLongLevelSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`

const LongMember = ({name, level, hp, maxHp}) => {
    const isCritical = hp/maxHp < 0.25
    const isKO = hp === 0
    return (<StyledLongMember
                isCritical={isCritical}
                isKO={isKO}
              >
        <StyledLongMemberSpacer>
          <div>{name}</div>
          <StyledLongLevelSpacer>{copy.window.party.level} {level}</StyledLongLevelSpacer>
        </StyledLongMemberSpacer>
        <StyledLongMemberSpacer>
          <div>{copy.window.party.hp}</div>
          <div>{hp} / {maxHp}</div>
        </StyledLongMemberSpacer>
      </StyledLongMember>)
  }

const ActivePartyWindow = ({position, member}) => {
  return (<Window
      title={copy.window.status.title}
      x='1.25%' y={`${10+10*position}%`}
      width='67%'
    >
      <LongMember {...member} />
  </Window>)
}


const StyledSubMenusList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const SubMenuItem = styled.li`
  padding: 1px 0px;
`

const SubMenusList = ({submenus}) => {
  return (<Window
        x='72%'
        width='23%'
      >
      <StyledSubMenusList>
          {submenus.map((submenu) => {
            return (<SubMenuItem>
              {copy.window.submenus[submenu]}
            </SubMenuItem>)
          })}
        </StyledSubMenusList>
      </Window>)
}

const StyledMenu = styled.div`
padding: 4px;
position: relative;
width: inherit;
height: inherit;
`

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false)

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
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

const MainMenu = ({onNavigate}) => {
 const input = {
   up: useKeyPress('ArrowUp'),
   down: useKeyPress('ArrowDown'),
   left: useKeyPress('ArrowLeft'),
   right: useKeyPress('ArrowRight'),
   confirm: useKeyPress('z'),
   cancel: useKeyPress('x'),
} 

const [cursor, setCursor] = useState('submenus')

useEffect(() => {
  if(input.left){
    setCursor('submenus')
  }else if(input.right){
    setCursor('activeParty')
  }
}, input)
 
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
    level: 99,
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
  'save',
]

return (<StyledMenu>
    <Window 
      title={copy.window.help.title}
      x='0%' y='0%'
      width='70%'
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
      y='86%'
      width='70%'
     >
      Island Closest to Hell
    </Window>
    <GeneralDataWindow 
      {...generalData}
      />
  </StyledMenu>)
}

export default MainMenu