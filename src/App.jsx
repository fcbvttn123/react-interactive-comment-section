import './App.css'
import { AddComment } from './components/AddComment'
import { CommentCard } from './components/CommentCard'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

function App() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='bg-slate-200 p-4'>

        <CommentCard 
          openDialog={setIsOpen}
          commentOwnerName='amyrobson' 
          createdAt={(new Date(2024, 1, 2, 12, 30, 0, 0)).getTime()} 
          commentLikeNumber={12} 
          commentOwnerImage='image-amyrobson.png'
          commentContent='Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.' 
        />

        <CommentCard openDialog={(v) => setIsOpen(v)} commentOwnerName='maxblagun' commentOwnerImage='image-maxblagun.png' createdAt={(new Date(2024, 1, 25, 12, 30, 0, 0)).getTime()} commentLikeNumber={5} commentContent='Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'>
          <CommentCard openDialog={setIsOpen} referToOthers={"maxblagun"} commentOwnerName='ramsesmiron' commentOwnerImage='image-ramsesmiron.png' createdAt={(new Date(2024, 2, 6, 12, 30, 0, 0)).getTime()} commentLikeNumber={4} commentContent='If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.' />
          <CommentCard openDialog={setIsOpen} referToOthers={"amyrobson"} isYou={true} commentOwnerName={"fcbvttn"} commentOwnerImage='image-juliusomo.png' createdAt={(new Date(2024, 2, 11, 12, 30, 0, 0)).getTime()} commentLikeNumber={2} commentContent='I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.' />
        </CommentCard>

        <AddComment avt="image-juliusomo.png" />
              
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-4 rounded-lg">
            <Dialog.Title className="font-bold text-lg">Delete Comment</Dialog.Title>
            <Dialog.Description className="my-4 text-slate-600">
              Are you sure you want to delete this comment? This will remove the comment and can’t be undone.
            </Dialog.Description>
            <button onClick={() => setIsOpen(false)} className='px-4 py-2 text-lg bg-slate-500 text-white font-semibold rounded-lg mr-4'>No, Cancel</button>
            <button onClick={() => setIsOpen(false)} className='px-4 py-2 text-lg bg-red-400 text-white font-semibold rounded-lg'>Yes, Delete</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default App


// Only like if you are currently logged in (CommentLikes component)
