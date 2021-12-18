import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostListItemType } from 'types/PostItem.types'
import PostItem from 'components/Main/PostItem'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

type PostListProps = {
    selectedCategory: string,
    posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 768px;
  position: relative;
  margin: 0 auto;
  padding: 50px 0 100px;
  top : -100px;

  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px 20px;
    top : 0px;
  }

  @media (max-width: 748px) {
    grid-template-columns: 1fr;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
    posts,
    selectedCategory,
}) {

    const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts)

    return (
        <PostListWrapper ref={containerRef}>
            {postList.map(({ node: {
                id,
                fields: { slug },
                frontmatter } }: PostListItemType) => (
                <PostItem {...frontmatter} link={slug} key={id} />
            ))}
        </PostListWrapper>
    )
}

export default PostList