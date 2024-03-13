import './App.css'
import { AddComment } from './components/AddComment'
import { CommentCard } from './components/CommentCard'

function App() {
  return (
    <div className='bg-slate-200 p-4'>
        <CommentCard isYou={false} commenter={null} />
        <AddComment />
    </div>
  )
}

export default App


// Only like if you are currently logged in (CommentLikes component)
