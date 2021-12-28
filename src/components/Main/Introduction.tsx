import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background: #f5d17f;
  padding-top : 63px;
  display: flex;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1140px;
  height: 320px;
  margin: 0 auto;
  align-items: center;

  
  @media (max-width: 1140px) {
    width: 100%;
    height: 220px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 1140px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>dmchoi</SubTitle>
          <Title></Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction