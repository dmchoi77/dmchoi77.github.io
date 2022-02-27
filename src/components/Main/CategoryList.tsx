import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

export type CategoryListProps = {
    selectedCategory: string,
    categoryList: {
        [key: string]: number
    },
    mode: string
}

type CategoryItemProps = {
    active: boolean;
}

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

type SidebarProps = {
    mode: string
}

const CategoryListWrapper = styled.div`
    display: block;
    flex-wrap: wrap;
    width: 240px;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 100px;  
`
const Sidebar = styled.div<SidebarProps>`
    ${({ mode }) => {
        if (mode === '') {
            return css`
            display: flex;
            flex-direction: column;
            padding: 0 auto;
            position: absolute;

            @media (max-width: 1140px) {
                display: none;
            }
            `
        }
        else {
            return css`
            display: none;

            @media (max-width: 1140px){
                display: flex;
                flex-direction: column;
                width: 200px;
                padding: 30px;
                position: fixed;
                height: 100vh;
                top: 62px;
                left: 0px;
                background-color: rgb(230 221 197);
            }

            @media (max-width: 768px) {
                padding: 30px;
                top: 50px;
                h3 {
                    font-size: 20px;
                }
                a {
                    font-size: 13px;
                }
            }
            `
        }
    }}
`

export const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
)) <CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 13px;
    font-weight: ${({ active }) => (active ? '800' : '300')};
    cursor: pointer;
    width: max-content  ;

    &:last-of-type {
      margin-right: 0;
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
    }
  `


const CategoryList: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList,
    mode
}) {
    return (
        <CategoryListWrapper >
            <Sidebar mode={mode}>
                <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>Categories</h3>
                {Object.entries(categoryList).map(([name, count]) => (
                    <CategoryItem
                        to={`/?category=${name}`}
                        active={name === selectedCategory}
                        key={name}
                    >
                        {name} ({count})
                    </CategoryItem>
                ))}
            </Sidebar>
        </CategoryListWrapper>
    )
}

export default CategoryList

