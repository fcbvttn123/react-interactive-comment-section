import { HeartIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'

export function CommentLikes() {

    const [liked, setLike] = useState(false)
    const likeNumbers = useRef(12) // Hard Code

    let unlikeStyle = {fill: "white", stroke: "black"}
    let likeStyle = {fill: "rgb(239 68 68)", stroke: "rgb(239 68 68)"}

    function toggleLike() {
        liked ? --likeNumbers.current : ++likeNumbers.current 
        setLike(!liked)
    }

    return (
        <div className='flex items-center'>
            <button onClick={toggleLike}><HeartIcon className='w-6 h-5' style={liked ? likeStyle : unlikeStyle}/></button>
            <span>{likeNumbers.current}</span>
        </div>
    )

}




// Only like if you are currently logged in 