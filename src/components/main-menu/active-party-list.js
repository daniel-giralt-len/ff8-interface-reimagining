import React, { Fragment } from 'react'
import styled from 'styled-components'
import getMemberColorByStatus from './get-member-color'
import copy from '../../data/copy'
import Window from '../window'

const StyledLongMember = styled.div`
  width: 100%
  display: grid;
  text-align: right;
  grid-template-columns: 24% 11% 13% 11% 19% 5% 16.5%;
  color: ${({ isKO, isCritical }) => getMemberColorByStatus({ isKO, isCritical })}
`

const StyledMemberName = styled.div`
  text-align: left;
`

const LongMember = ({ name, level, hp, maxHp }) => {
  const isCritical = hp / maxHp < 0.25
  const isKO = hp === 0
  return (<StyledLongMember
    isCritical={isCritical}
    isKO={isKO}
  >
    <StyledMemberName>{name}</StyledMemberName>
    <div>{copy.window.party.level}</div>
    <div>{level}</div>
    <div>{copy.window.party.hp}</div>
    <div>{hp}</div>
    <div>/</div>
    <div>{maxHp}</div>
  </StyledLongMember>)
}

const ActivePartyWindow = ({ position, member }) => {
  return (<Window
    title={copy.window.status.title}
    x='1.25%' y={`${10 + 10.5 * position}%`}
    width='67%' height='9%'
    xCentered yCentered
  >
    <LongMember {...member} />
  </Window>)
}

const ActivePartyList = ({ party }) => {
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

export default ActivePartyList
