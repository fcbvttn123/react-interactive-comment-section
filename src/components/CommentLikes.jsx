import { HeartIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'

// Including the "Heart Icon" and the "Like Amount Number" of the "Comment Card"
export function CommentLikes({likeNumbers=0}) {

    const [liked, setLike] = useState(false)
    const currentLikeNumbers = useRef(likeNumbers)
    const firstRender = useRef(true)

    // Style for "like and unlike status" 
    let unlikeStyle = {fill: "white", stroke: "black"}
    let likeStyle = {fill: "rgb(239 68 68)", stroke: "rgb(239 68 68)"}

    // After a "Click Event" (one render) on the "Heart Icon", the "Like Number" will be incremented or decremented by 1
    // This useEffect() function is not triggered in the first component render 
    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false
        } else {
            liked ? --currentLikeNumbers.current : ++currentLikeNumbers.current 
        }
    }, [liked])

    return (
        // Container (Flex)
        <div className='flex items-center'>
            {/* Flex Item 1 --> Heart Icon (Button) */}
            <button onClick={() => setLike(!liked)}>
                <span className="sr-only">Like-comment Button</span>
                <HeartIcon className='w-6 h-5' style={liked ? likeStyle : unlikeStyle} aria-hidden="true"/>
            </button>
            {/* Flex Item 2 --> Number */}
            <span>{currentLikeNumbers.current}</span>
        </div>
    )

}