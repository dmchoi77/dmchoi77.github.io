import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
    selectedCategory: string,
    categoryList: {
        [key: string]: number
    }
}

type CategoryItemProps = {
    active: boolean;
}

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1140px;
    margin: 100px auto 0;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top : 240px;
    
    @media (max-width: 1140px) {
        display: none;
    }
`
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 768px;
    padding: 0 auto;
    position: absolute;
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
)) <CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 13px;
    font-weight: ${({ active }) => (active ? '800' : '300')};
    cursor: pointer;
    width: 100%;

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
}) {
    return (
        <CategoryListWrapper>
            <Sidebar>
                <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>Categories</h3>
                {Object.entries(categoryList).map(([name]) => (
                    <CategoryItem
                        to={`/?category=${name}`}
                        active={name === selectedCategory}
                        key={name}
                    >
                        {name}
                    </CategoryItem>
                ))}
            </Sidebar>
        </CategoryListWrapper>
    )
}

export default CategoryList

