import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'


const Header: FunctionComponent = function ({

}) {
    return (
        <HeaderWrapper>
            <HeaderNav>
                <li style={{ fontSize: "20px", fontWeight: "800" }}>
                    <Link to="/">dmchoi</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </HeaderNav>

        </HeaderWrapper>
    )
}
export default Header

const HeaderWrapper = styled.header`
   width : 100%;
   height : 62px;
   position : fixed;
   background-color : #ffff;
   display : flex;
   z-index : 999;
   box-shadow: 0px 0px 4px grey;

   @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
        height: 50px;
        padding: 0 20px;
      }
`

const HeaderNav = styled.div`
    // font-weight: 800;
    // font-size : 20px;
    display: flex;
    width: 768px;
    height : 100%;
    margin: 0 auto;
    justify-content : space-between;
    align-items : center;
`