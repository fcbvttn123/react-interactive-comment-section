import { CommentCard } from "./CommentCard";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Outlet } from "react-router-dom";
import {allComments} from "../data"

export function CommentSection() {
  let [isOpen, setIsOpen] = useState(false);
  let [currentSignedInUser, setCurrentSignedInUsername] = useState({
    username: "juliusomo", 
    image: "image-juliusomo.png"
  })

  let cards = []
  allComments.forEach(obj => {
    if(obj.replies.length) {
      let cardRendered = 
        <CommentCard
          key={obj.id}
          openDialog={setIsOpen}
          commentOwnerName={obj.user.username || "Anonymous"}
          createdAt={obj.createdAt}
          commentLikeNumber={obj.likes}
          commentOwnerImage={obj.user.image || "No Image"}
          commentContent={obj.content}
          isYou={obj.user.username == currentSignedInUser.username}
        >
          {
            obj.replies.map(replies => 
              <CommentCard
                key={replies.id}
                openDialog={setIsOpen}
                commentOwnerName={replies.user.username || "Anonymous"}
                createdAt={replies.createdAt}
                commentLikeNumber={replies.likes}
                commentOwnerImage={replies.user.image || "No Image"}
                commentContent={replies.content}
                isYou={replies.user.username == currentSignedInUser.username}
              />
            )
          }
        </CommentCard>
      cards.push(cardRendered)
    } else {
      let cardRendered = 
        <CommentCard
          key={obj.id}
          openDialog={setIsOpen}
          commentOwnerName={obj.user.username || "Anonymous"}
          createdAt={obj.createdAt}
          commentLikeNumber={obj.likes}
          commentOwnerImage={obj.user.image || "No Image"}
          commentContent={obj.content}
          isYou={obj.user.username == currentSignedInUser.username}
        />
      cards.push(cardRendered)
    }
  })

  return (
    <>
      <div className="bg-slate-200 p-4">

        {cards}

        <Outlet context={{currentSignedInUser}}/>

      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          </Transition.Child>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white p-4 rounded-lg">
                <Dialog.Title className="font-bold text-lg">
                  Delete Comment
                </Dialog.Title>
                <Dialog.Description className="my-4 text-slate-600">
                  Are you sure you want to delete this comment? This will remove
                  the comment and can’t be undone.
                </Dialog.Description>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-lg bg-slate-500 text-white font-semibold rounded-lg mr-4"
                >
                  No, Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-lg bg-red-400 text-white font-semibold rounded-lg"
                >
                  Yes, Delete
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}