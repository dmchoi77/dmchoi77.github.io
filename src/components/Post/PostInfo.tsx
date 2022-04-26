import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PostInfoProps = {
  date: string
  title: string
}

const PostInfo: FunctionComponent<PostInfoProps> = function ({
  title,
  date,
}) {
  return (
    <PostInfoWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </PostInfoWrapper>
  )
}

export default PostInfo

const PostInfoWrapper = styled.div`
  position: relative;
  width: 768px;
  height: 100%;
  margin: 100px auto 0;
`

const Title = styled.h1`
  width: 768px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
    font-size: 28px;
  }
`

const Date = styled.div`
  padding: 20px 0px;
  width: 768px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px;
  }
`
