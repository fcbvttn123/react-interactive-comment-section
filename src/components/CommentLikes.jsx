import { HeartIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'

// Including the "Heart Icon" and the "Like Amount Number" of the "Comment Card"
export function CommentLikes({likeNumbers=0}) {

    const [liked, setLike] = useState(false)
    const currentLikeNumbers = useRef(likeNumbers)

    // Style for "like and unlike status" 
    let unlikeStyle = {fill: "white", stroke: "black"}
    let likeStyle = {fill: "rgb(239 68 68)", stroke: "rgb(239 68 68)"}

    // When a click event triggered on the "Heart Icon"
        // --> The "Like Number" will be incremented or decremented by 1 
        // --> The "Heart" will change from white to red or vice versa 
    function toggleHeartIcon() {
        liked ? --currentLikeNumbers.current : ++currentLikeNumbers.current 
        setLike(!liked)
    }

    return (
        // Container (Flex)
        <div className='flex items-center'>
            {/* Flex Item 1 --> Heart Icon (Button) */}
            <button onClick={toggleHeartIcon}>
                <span className="sr-only">Like-comment Button</span>
                <HeartIcon className='w-6 h-5' style={liked ? likeStyle : unlikeStyle} aria-hidden="true"/>
            </button>
            {/* Flex Item 2 --> Number */}
            <span>{currentLikeNumbers.current}</span>
        </div>
    )

}