import { CommentLikes } from "./CommentLikes";
import { ArrowUturnLeftIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import { formatDistanceToNowStrict  } from "date-fns";
import { Link } from "react-router-dom";

export function CommentCard({children, cardId=null, openDialog=null, commentOwnerName="anonymous", commentOwnerAvt="", isYou = false, taggedName=null, createdAt=(new Date(2024, 2, 2, 12, 30, 0, 0)).getTime(), commentContent="", commentLikeNumber=0}) {
    return (
        // Comment Card
        <div>
            <div className="max-w-96 mx-auto p-4 rounded-lg bg-white mb-4">
                {/* Container: Card Owner Avt, Card Owner Name, Date Created*/}
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 rounded-full bg-red-300">
                        <img src={`./images/avatars/${commentOwnerAvt}`} />
                    </div>
                    <p className="font-bold">{commentOwnerName}</p>
                    {isYou && <p className="text-white bg-indigo-700 px-2 rounded-md text-sm font-bold">You</p>}
                    {createdAt && <p className="text-slate-600">{formatDistanceToNowStrict(createdAt)}</p>}
                </div>
                {/* Tagged Name */}
                <p className="text-slate-600 my-2">
                    {taggedName && <span className="text-indigo-700 font-bold">@{taggedName}</span>} {commentContent}
                </p>
                {/* Container: CommentLikes (Heart Button and Number), Reply-Edit-Delete button*/}
                <div className="flex items-center justify-between">
                    <CommentLikes likeNumbers={commentLikeNumber}/>
                    <div className="flex items-center gap-x-4">
                        {isYou && <button onClick={() => openDialog(true)} className="flex items-center">
                            <TrashIcon aria-hidden="true" className="w-6 h-4 text-red-500"/>
                            <span className="font-bold text-red-500">Delete</span>
                            <span className="sr-only">Delete Comment Button</span>
                        </button>}
                        { isYou ? 
                        <button className="flex items-center">
                            <PencilIcon aria-hidden="true" className="w-6 h-4 text-indigo-700"/> 
                            <span className="font-bold text-indigo-700">Edit</span>
                            <span className="sr-only">Edit Button</span>
                        </button>
                        : 
                        <Link to="/reply" state={{referTo: commentOwnerName, referToPostId: cardId}}>
                            <button className="flex items-center">
                                <ArrowUturnLeftIcon aria-hidden="true" className="w-6 h-4 text-indigo-700"/>
                                <span className="font-bold text-indigo-700">Reply</span>
                                <span className="sr-only">Reply Comment Button</span>
                            </button>
                        </Link>
                        }
                    </div>
                </div>
            </div>

            {/* Replies */}
            {children && 
            <div className="pl-4 border-l-2 border-slate-400/40 max-w-96 mx-auto">
                {children}
            </div>}

        </div>
    )
}