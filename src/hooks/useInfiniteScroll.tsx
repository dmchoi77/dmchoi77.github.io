import { MutableRefObject, useState, useRef, useMemo, useEffect } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
    containerRef: MutableRefObject<HTMLDivElement | null>
    postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 6

const useInfiniteScroll = function (
    selectedCategory: string,
    posts: PostListItemType[],
): useInfiniteScrollType {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    )
    const [count, setCount] = useState<number>(1)
    const observer: MutableRefObject<IntersectionObserver | null> =
        useRef<IntersectionObserver>(null)
    const postListByCategory = useMemo<PostListItemType[]>(
        () =>
            posts.filter(({ node: { frontmatter: { categories } } }: PostListItemType) =>
                selectedCategory !== 'All'
                    ? categories.includes(selectedCategory)
                    : true,
            ),

        [selectedCategory],
    )

    useEffect(() => {
        observer.current = new IntersectionObserver((entries, observer) => {
            if (!entries[0].isIntersecting) return

            setCount(value => value + 1)
            observer.unobserve(entries[0].target)
        })
    }, [])

    // 선택된 카테고리가 변경될 경우 count를 1로 변경
    useEffect(() => setCount(1), [selectedCategory])

    useEffect(() => {
        if (
            NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
            containerRef.current === null ||
            containerRef.current.children.length === 0 ||
            observer.current === null
        )
            return

        observer.current.observe(
            // count값이 변경될 때마다 ref로 연결된 요소 맨 마지막 자식 노드를 관찰
            containerRef.current.children[containerRef.current.children.length - 1],
        )
    }, [count, selectedCategory])
    return {
        containerRef,
        postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    }
}

export default useInfiniteScroll