import React from 'react'
import getMemberColorByStatus from './get-member-color'
import styled from 'styled-components'
import font from '../../data/font'
import copy from '../../data/copy'
import Window from '../window'

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
  color: ${({ isKO, isCritical }) => getMemberColorByStatus({ isKO, isCritical })}
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
  width: ${({ ratio }) => `${100 * ratio}%`};
`

const ShortMember = (member) => {
  const { name, level, hp, maxHp } = member
  const hpRatio = hp / maxHp
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

const InactivePartyList = ({ party }) => {
  return (<Window
    x='1.25%' y='40%'
    width='67%' height='40%'
  >
    <StyledInactivePartyList>
      {party.map((member) => (<ShortMember key={member.name} {...member} />))}
    </StyledInactivePartyList>
  </Window>)
}

export default InactivePartyList
