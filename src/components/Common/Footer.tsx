import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  background-color : black;
  display: grid;
  height : 75px; 
  place-items: center;
  maring : 0 auto;
  margin-top: 15px;
  font-size: 13px;
  text-align: center;
  line-height: 1.5;
  align-content: center;
  color : white;

  @media (max-width: 1140px) {
    font-size: 9px;
  }
`

const Content = styled.footer`
    width : 1140px;
    display : flex;
    margin : 0 auto;
    justify-content : center;
    align-items : center;
    font-weight: 500;
    @media (max-width: 1140px) {
      width: 100%;
    }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <Content>
        <ul style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <a href="https://github.com/dmchoi77" target='_blank'>
            Github
          </a>
          <a href="mailto:minminnn11@daum.net">
            Contact
          </a>
        </ul>
      </Content>
      © 2021 dmchoi, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
