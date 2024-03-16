import { CommentSection } from './components/CommentSection'
import { AddComment } from './components/AddComment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommentSection />}>
          <Route path='reply' element={<AddComment />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


// Only like if you are currently logged in (CommentLikes component)
