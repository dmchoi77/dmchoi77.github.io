import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useDarkMode from "use-dark-mode"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons"
import { CategoryListProps } from 'components/Main/CategoryList'
import CategoryList from 'components/Main/CategoryList'

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

const Header: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList
}) {
    const darkMode = useDarkMode(false)
    const [hide, setHide] = useState<boolean>(false);
    const [pageY, setPageY] = useState<number>(0);

    // Build Error 해결 
    if (typeof document !== 'undefined') {
        const documentRef = useRef(document);

        useEffect(() => {
            documentRef.current.addEventListener('scroll', throttleScroll);
            return () => documentRef.current.removeEventListener('scroll', throttleScroll);
        }, [pageY]);
    }

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
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle((val) => !val)
    }

    return (
        <HeaderWrapper className={hide && 'hide'}>
            <HeaderNav>
                <ToggleButton>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={toggleHandler}
                    />
                </ToggleButton>
                {
                    toggle ?
                        <div onClick={toggleHandler}>
                            <CategoryList
                                selectedCategory={selectedCategory}
                                categoryList={categoryList}
                                mode="toggle"
                            />
                        </div>
                        : null
                }
                <BrandName>
                    <Link to="/">dmchoi</Link>
                </BrandName>
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

    @media (max-width: 1140px) {
        width: 90%;
    }
`

const ToggleButton = styled.button`
    display: none;
    border: none;
    background-color: transparent;
    @media (max-width: 1140px) {
        display: block;
    }
`

const BrandName = styled.li`
    font-size: 20px;
    font-weight: 800;
    @media (max-width: 1140px) {
        display: none;
    }
`