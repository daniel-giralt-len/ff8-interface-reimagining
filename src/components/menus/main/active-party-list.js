import React, { Fragment } from 'react'
import styled from 'styled-components'
import getMemberColorByStatus from './get-member-color'
import copy from '../../../data/copy'
import Window from '../../window'
import Cursor from '../../cursor'

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

const LongMember = ({ name, level, hp, maxHp, hasCursor, hasSubCursor }) => {
  const isCritical = hp / maxHp < 0.25
  const isKO = hp === 0
  return (<StyledLongMember
    isCritical={isCritical}
    isKO={isKO}
  >
    {hasSubCursor && (<Cursor x='-10%' isSubCursor/>)}
    {hasCursor && (<Cursor x='-10%'/>)}
    <StyledMemberName>{name}</StyledMemberName>
    <div>{copy.window.party.level}</div>
    <div>{level}</div>
    <div>{copy.window.party.hp}</div>
    <div>{hp}</div>
    <div>/</div>
    <div>{maxHp}</div>
  </StyledLongMember>)
}

const ActivePartyWindow = ({ position, member, hasCursor, hasSubCursor }) => {
  return (<Window
    title={copy.window.status.title}
    x='1.25%' y={`${10 + 10.5 * position}%`}
    width='67%' height='9%'
    xCentered yCentered
  >
    <LongMember
      hasCursor={hasCursor}
      hasSubCursor={hasSubCursor}
      {...member}
    />
  </Window>)
}

const ActivePartyList = ({ party, cursor, subcursors }) => {
  const [member0, member1, member2] = party

  const cursorProps = cursorTarget => {
    return {
      hasCursor: cursor === cursorTarget,
      hasSubCursor: subcursors.includes(cursorTarget)
    }
  }

  return (
    <Fragment>
      <ActivePartyWindow
        position={0}
        member={member0}
        {...cursorProps('activeParty0')}
      />
      <ActivePartyWindow
        position={1}
        member={member1}
        {...cursorProps('activeParty1')}
      />
      <ActivePartyWindow
        position={2}
        member={member2}
        {...cursorProps('activeParty2')}
      />
    </Fragment>
  )
}

export default ActivePartyList
