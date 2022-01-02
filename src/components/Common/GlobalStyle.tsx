import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,800&family=Do+Hyeon:wght@400;700;800&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
    list-style:none;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body.light-mode {
    color: rgba(0,0,0,0.8);
    background-color: rgb(255 250 237 / 66%);
  }

  body.dark-mode {
    color: #fff;
    background-color: #363636;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul a {
    padding: 0 6px;
  }

  .mode-icon {
    height: 1.25rem;
    width: 1.25rem;
    margin-left: 1rem;
    cursor: pointer;
    color : #ffc500;
  }
  
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle