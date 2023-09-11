import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {

  const [bookmarks,setBookmarks]=useState([])
  const [reading,setReading]=useState(0)

  const handleAddToBookmarks=blog=>{
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time,id) =>{
    let newReading = reading + time;
    setReading(newReading)
    if(!bookmarks.length){
      alert("There is no blog to read")
      setReading(0)
      return;
    }
    const remaining = bookmarks.filter(bookmark=> bookmark.id!==id)
    setBookmarks(remaining)
  }

  return (
    <>
     
     <Header />
     <div className="md:flex max-w-6xl mx-auto">
     <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} />
     <Bookmarks bookmarks={bookmarks} reading={reading} />
     </div>
     
    </>
  )
}

export default App
