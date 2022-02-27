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
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 600px;
  position: relative;
  margin: 0 auto;
  padding: 130px 0 100px;
  top : -33px;

  @media (max-width: 1140px) {
    width: 100%;
    padding: 50px 20px;
    top : 50px;
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