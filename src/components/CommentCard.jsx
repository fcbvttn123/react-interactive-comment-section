import { CommentLikes } from "./CommentLikes";
import { ArrowUturnLeftIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid'

export function CommentCard({isYou = false, commenter=null}) {
    return (
        <div className="max-w-96 mx-auto p-4 rounded-lg bg-white">
            <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 rounded-full bg-red-300"></div>
                <p className="font-bold">amyrobson</p>
                {isYou && <p className="text-white bg-indigo-700 px-2 rounded-md text-sm font-bold">You</p>}
                <p className="text-slate-600">1 month ago</p>
            </div>
            <p className="text-slate-600 my-2">
                {commenter && <span className="text-indigo-700 font-bold">@ramsesmiron</span>} Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
            </p>
            <div className="flex items-center justify-between">
                <CommentLikes likeNumbers={5}/>
                <div className="flex items-center gap-x-4">
                    {isYou && <button className="flex items-center">
                        <TrashIcon className="w-6 h-4 text-red-500"/>
                        <span className="font-bold text-red-500">Delete</span>
                    </button>}
                    <button className="flex items-center">
                        {isYou ? <PencilIcon className="w-6 h-4 text-indigo-700"/> : <ArrowUturnLeftIcon className="w-6 h-4 text-indigo-700"/>}
                        <span className="font-bold text-indigo-700">{isYou ? "Edit" : "Reply"}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}