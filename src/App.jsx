import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='container mx-auto'>

      <div>
      <Header></Header>
      </div>

      <div className='md:flex' >
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

      </div>
    </>
  )
}

export default App
