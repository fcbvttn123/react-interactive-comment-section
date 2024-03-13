import { HeartIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'

export function CommentLikes({likeNumbers=0}) {

    const [liked, setLike] = useState(false)
    const refData_LikeNumbers = useRef(likeNumbers)

    // Style for "like and unlike status" 
    let unlikeStyle = {fill: "white", stroke: "black"}
    let likeStyle = {fill: "rgb(239 68 68)", stroke: "rgb(239 68 68)"}

    function toggleLike() {
        // Update "like numbers" 
        liked ? --refData_LikeNumbers.current : ++refData_LikeNumbers.current 
        // Toggle "like state" status 
        setLike(!liked)
    }

    return (
        <div className='flex items-center'>
            <button onClick={toggleLike}>
                <span className="sr-only">Like-comment Button</span>
                <HeartIcon className='w-6 h-5' style={liked ? likeStyle : unlikeStyle} aria-hidden="true"/>
            </button>
            <span>{refData_LikeNumbers.current}</span>
        </div>
    )

}