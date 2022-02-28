import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import { Helmet } from 'react-helmet'
import { CategoryListProps } from 'components/Main/CategoryList'

type TemplateProps = {
    title: string
    description: string
    url: string
    image: string
    children: ReactNode
} & CategoryListProps

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
    title,
    description,
    url,
    image,
    children,
    // selectedCategory,
    // categoryList
}) {

    return (
        <Container>
            <Helmet>
                <title>{title}</title>

                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={title} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:site" content="@사용자이름" />
                <meta name="twitter:creator" content="@사용자이름" />
                <meta name="google-site-verification" content="PDiP1n57bVVgqNXEDqtRl4nlNIVodByW-1HYmtD_ZXI" />
                <meta name="naver-site-verification" content="ac22b6a167833419dfd869c6f560e82a2963ab20" />

                <html lang="ko" />
            </Helmet>
            <Header
                // selectedCategory={selectedCategory}
                // categoryList={categoryList}
                mode="toggle"
            />
            <GlobalStyle />
            {children}
            <Footer />
        </Container>
    )
}

export default Template