import './App.css'
import { AddComment } from './components/AddComment'
import { CommentCard } from './components/CommentCard'

function App() {
  return (
    <div className='bg-slate-200 p-4'>

      <CommentCard 
        commentOwnerName='amyrobson' 
        createdAt={(new Date(2024, 1, 2, 12, 30, 0, 0)).getTime()} 
        commentLikeNumber={12} 
        commentOwnerImage='image-amyrobson.png'
        commentContent='Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.' 
      />
      
      <CommentCard commentOwnerName='maxblagun' commentOwnerImage='image-maxblagun.png' createdAt={(new Date(2024, 1, 25, 12, 30, 0, 0)).getTime()} commentLikeNumber={5} commentContent='Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'>
        <CommentCard referToOthers={"maxblagun"} commentOwnerName='ramsesmiron' commentOwnerImage='image-ramsesmiron.png' createdAt={(new Date(2024, 2, 6, 12, 30, 0, 0)).getTime()} commentLikeNumber={4} commentContent='If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.' />
        <CommentCard referToOthers={"amyrobson"} isYou={true} commentOwnerName={"fcbvttn"} commentOwnerImage='image-juliusomo.png' createdAt={(new Date(2024, 2, 11, 12, 30, 0, 0)).getTime()} commentContent='I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.' />
      </CommentCard>
      
      <AddComment avt="image-juliusomo.png" />
      
    </div>
  )
}

export default App


// Only like if you are currently logged in (CommentLikes component)
