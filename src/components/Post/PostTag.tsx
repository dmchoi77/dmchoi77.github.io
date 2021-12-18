import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type PostTagProps = {
    categories: string[]
}

const PostTagWrapper = styled.div`
 display: flex;
 margin: 0 auto;
 width: 768px;
 flex-direction: column;

 @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px;
 }
`

const TagTitle = styled.div`
 margin-bottom : 30px;
 font-size : 20px;

 @media (max-width: 768px) {
    font-size : 16px;
 }

`


const PostTag: FunctionComponent<PostTagProps> = function ({
    categories
}) {

    return (
        <PostTagWrapper>
            <TagTitle>Tags</TagTitle>
            <ul style={{ display: "flex", flexDirection: "row" }}>
                {categories.map(name =>
                    <Link to={`/?category=${name}`}
                        style={{
                            fontWeight: "lighter",
                            fontSize: "0.8rem",
                            marginRight: "1.1rem",
                            padding: "4px 15px",
                            cursor: "pointer",
                            borderRadius: "150px",
                            backgroundColor: "rgb(255 194 9 / 94%)"

                        }}>{name}</Link>)
                }
            </ul>

        </PostTagWrapper>
    )
}

export default PostTag