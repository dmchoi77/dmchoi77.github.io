import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  // @font-face {
  //   font-family: 'OTWelcomeBA';
  //   src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2') format('woff2');
  //   font-weight: normal;
  //   font-style: normal;
  // }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'OTWelcomeBA';
    list-style:none;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body.light-mode {
    a {
      color: rgba(0,0,0,0.8);
    }
    color: rgba(0,0,0,0.8);
    background-color: rgb(255 250 237 / 66%);
  }

  body.dark-mode {
    color: #fff;
    background-color: #363636;
  }

  a {
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