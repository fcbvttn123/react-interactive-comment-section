import { CommentLikes } from "./CommentLikes";
import { ArrowUturnLeftIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import { formatDistanceToNowStrict  } from "date-fns";

export function CommentCard({children, commentOwnerName="anonymous", isYou = false, commenter=null, createdAt=(new Date(2024, 2, 2, 12, 30, 0, 0)).getTime()}) {
    return (
        <div>
            {/* Card */}
            <div className="max-w-96 mx-auto p-4 rounded-lg bg-white mb-4">
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 rounded-full bg-red-300"></div>
                    <p className="font-bold">{commentOwnerName}</p>
                    {isYou && <p className="text-white bg-indigo-700 px-2 rounded-md text-sm font-bold">You</p>}
                    {createdAt && <p className="text-slate-600">{formatDistanceToNowStrict(createdAt)}</p>}
                </div>
                <p className="text-slate-600 my-2">
                    {commenter && <span className="text-indigo-700 font-bold">@{commenter}</span>} Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                </p>
                <div className="flex items-center justify-between">
                    <CommentLikes likeNumbers={5}/>
                    <div className="flex items-center gap-x-4">
                        {isYou && <button className="flex items-center">
                            <TrashIcon aria-hidden="true" className="w-6 h-4 text-red-500"/>
                            <span className="font-bold text-red-500">Delete</span>
                            <span className="sr-only">Delete Comment Button</span>
                        </button>}
                        <button className="flex items-center">
                            {isYou ? <PencilIcon aria-hidden="true" className="w-6 h-4 text-indigo-700"/> : <ArrowUturnLeftIcon aria-hidden="true" className="w-6 h-4 text-indigo-700"/>}
                            <span className="font-bold text-indigo-700">{isYou ? "Edit" : "Reply"}</span>
                            <span className="sr-only">Edit or Reply Comment Button</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Replies */}
            <div className="pl-4 border-l-2 border-slate-400/40">
                {children}
            </div>
        </div>
    )
}