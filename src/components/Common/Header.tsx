import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useDarkMode from "use-dark-mode"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const throttle = (callback: Function, waitTime: number) => {
    let timerId: any = null;

    return () => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback()
            timerId = null;
        }, waitTime);
    };
}

const Header: FunctionComponent = function ({

}) {
    const darkMode = useDarkMode(false)
    const [hide, setHide] = useState<boolean>(false);
    const [pageY, setPageY] = useState<number>(0);
    const documentRef = useRef<HTMLDocument>(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        // console.log("pageYOffset : " + pageYOffset)
        // console.log("pageY : " + pageY)
        const hide = (pageYOffset !== 0) && (deltaY >= 0);
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttleScroll = throttle(handleScroll, 90);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

    return (
        <HeaderWrapper className={hide && 'hide'}>
            <HeaderNav>
                <li style={{ fontSize: "20px", fontWeight: "800" }}>
                    <Link to="/">dmchoi</Link>
                </li>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <FontAwesomeIcon className="mode-icon"
                        onClick={() => {
                            darkMode.disable()
                        }}
                        icon={faSun}
                    />
                    <FontAwesomeIcon className="mode-icon"
                        onClick={() => {
                            darkMode.enable()
                        }}
                        icon={faMoon}
                    />
                </div>
            </HeaderNav>
        </HeaderWrapper >
    )
}
export default Header

const HeaderWrapper = styled.header`
   width : 100%;
   height : 62px;
   position : fixed;
   background-color : rgb(230 221 197);
   display : flex;
   z-index : 999;
   box-shadow: 0px 0px 1px grey;
   color: rgba(0,0,0,0.8) !important;
   transition: 0.4s ease;

   &.hide {
     transform: translateY(-80px);
   }

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