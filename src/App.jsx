
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/BookMark/BookMark'
import Header from './components/Header/Header'

function App() {

  const [booksMarks, setBooksMarks] = useState([])
  const [readingTime, setTime] = useState(0)

  const markAsRead = ( time) =>{
    setTime(readingTime + time)
   
    
  }

  const handleAddToBookMark = blog =>{
    const newBookMarks = [...booksMarks, blog]
    setBooksMarks(newBookMarks)
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex mx-auto px-10 p-4 max-w-7xl gap-5'>

        <Blogs handleAddToBookMark= {handleAddToBookMark}
        
        markAsRead ={markAsRead}

        ></Blogs>
        <BookMark booksMarks={booksMarks}
        readingTime ={readingTime}
        ></BookMark>

      </div>
      
    </>
  )
}

export default App
