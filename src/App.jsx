import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
import EditPost from './components/pages/EditPost'
import DeletePost from './components/pages/DeletePost'
import Missing from './components/pages/Missing'

const App = () => {
 // const [loding, setLoding] = useState(true)
  const [search, setSearch] = useState('')
  const [searchResults,setSearchResults] = useState('')
  const [posts, setPosts] = useState([
    {
      id:1,
      title:"My First Post",
      img:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aut eveniet ut earum at voluptas alias. Ipsam est commodi molestias repellat similique animi, soluta, ex dolor esse rerum tempora ab.",
      date:"May 9" ,
      heartcount:10000,
      heart:true,
      commends:[]       
    },
    {
      id:2,
      title:"My Second Post",
      img:"https://picsum.photos/seed/picsum/450/300",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aut eveniet ut earum at voluptas alias. Ipsam est commodi molestias repellat similique animi, soluta, ex dolor esse rerum tempora ab.",
      date:"May 9" ,
      heartcount:0,
      heart:false,
      commends:[]       
    },
    {
      id:3,
      title:"My Third Post",
      img:"https://picsum.photos/seed/picsum/450/300",
      body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aut eveniet ut earum at voluptas alias. Ipsam est commodi molestias repellat similique animi, soluta, ex dolor esse rerum tempora ab.",
      date:"May 9" ,
      heartcount:0,
      heart:false,
      commends:[]       
    }
  ])
  

  useEffect(()=> {
    const filterResult = posts.filter((post)=> 
      ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()) )
      setSearchResults(filterResult)
      //setLoding(false)
    },[posts, search])

  return (
    <div className='App'>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} setPosts={setPosts}  />} />
        <Route path='/post' element={<Post posts={posts} setPosts={setPosts}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit/:id' element={<EditPost posts={posts} setPosts={setPosts}/>} />
        <Route path='/delete/:id' element={<DeletePost posts={posts} setPosts={setPosts}/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  )
}

export default App