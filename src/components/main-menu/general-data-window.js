import React from 'react'
import styled from 'styled-components'
import font from '../../data/font'
import copy from '../../data/copy'
import Window from '../window'

const StyledGeneralData = styled.div`
  ${font.size.small}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
  padding: 2px 0px;
`

const StyledGeneralDataSpacer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledMoneySpacer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const GeneralDataWindow = ({ playTime, rank, gil }) => {
  return (<Window
    x='72%' y='78%'
    width='23%' height='16%'
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

export default GeneralDataWindow
