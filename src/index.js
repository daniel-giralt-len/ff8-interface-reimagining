import React from 'react'
import ReactDOM from 'react-dom'
import Screen from './components/screen'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font-family: 'ff8';
    text-shadow: 1px 1px #000;
  }

  @font-face {
    font-family: 'ff8';
    font-style: normal;
    font-weight: 400;
    src: url('./ff8.woff');
  }
`

const app = (<React.Fragment>
  <GlobalStyle whiteColor />
  <Screen />
</React.Fragment>)

ReactDOM.render(app, document.querySelector('#root'))
