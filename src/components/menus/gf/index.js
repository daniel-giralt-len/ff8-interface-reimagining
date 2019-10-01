import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import cursorData from './cursor-layout'

import Menu from '../generic-menu'

import Portrait from '../../portrait'
import Window from '../../window'

const GFMenu = ({ copy }) => {
  return (<Fragment>
    <Window
      x='0%' y='22%'
      width='95%' height='71%'
      title={copy.window.gf.title}
    >
      <Portrait character='squall' />
    </Window>
  </Fragment>)
}

export default Menu({
  MenuComponent: GFMenu,
  cursorData
})
