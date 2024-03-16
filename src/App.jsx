import { CommentSection } from './components/CommentSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommentSection />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


// Only like if you are currently logged in (CommentLikes component)
