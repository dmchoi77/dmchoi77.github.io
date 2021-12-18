import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
    selectedCategory: string,
    categoryList: {
        // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
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
    position: sticky;
    display: flex;
    top: 200px;

    width: 100%;
    // margin-left: -660px;

    z-index: 10;
    flex-direction: column;
  
  @media (max-width: 1140px) {
    display : none;
    // width: 100%;
    // margin-top: 50px;
    // padding: 0 20px;
  }
`

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    top: 100px;
    right: 20px;
    width: 768px;
    padding: 0 auto;
    // position: sticky;
`
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
)) <CategoryItemProps>`
    top: 200px;
    // right: 46px;
    // margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({ active }) => (active ? '800' : '300')};
    cursor: pointer;
    // width: 100%;

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
                <h1 style={{ marginBottom: "20px" }}>Categories</h1>
                {Object.entries(categoryList).map(([name, count]) => (
                    <CategoryItem
                        to={`/?category=${name}`}
                        active={name === selectedCategory}
                        key={name}
                    >
                        #{name}({count})
                    </CategoryItem>
                ))}
            </Sidebar>
        </CategoryListWrapper>
    )
}

export default CategoryList
