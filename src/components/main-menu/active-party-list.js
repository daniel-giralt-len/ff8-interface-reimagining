import React, { Fragment } from 'react'
import styled from 'styled-components'
import getMemberColorByStatus from './get-member-color'
import copy from '../../data/copy'
import Window from '../window'

const StyledLongMember = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ isKO, isCritical }) => getMemberColorByStatus({ isKO, isCritical })}
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

const LongMember = ({ name, level, hp, maxHp }) => {
  const isCritical = hp / maxHp < 0.25
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

const ActivePartyWindow = ({ position, member }) => {
  return (<Window
    title={copy.window.status.title}
    x='1.25%' y={`${10 + 10.5 * position}%`}
    width='67%' height='9%'
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
