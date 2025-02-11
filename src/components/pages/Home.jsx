import React, { useState } from 'react'
import { FaRegHeart  } from "react-icons/fa";
import { FaHeart  } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import './Home.css';
import EditMenuLayout from './EditMenuLayout';



const Home = ({posts, setPosts}) => {

    const [editMenu, setEditMenu] = useState({})
    const [showFullContentId, setShowFullContentId] = useState({}) 

    const handleLike = async (id, heart) =>{

            const updatedRow = posts.find(post => post.id === id);
            // Send only the updated post's values
            const heartcount = heart ? updatedRow.heartcount - 1 : updatedRow.heartcount + 1
            setPosts(posts.map((post)=> post.id === id ? {...post, heart:!heart, heartcount:heartcount} : post))
       
    }

    const handleEditMenu = (PostId) =>{
        setEditMenu((prev)=>(
            {...prev, [PostId]:!prev[PostId]}
        ));

    }
    const handleShowFullContent = (PostId) =>{
        setShowFullContentId((prev) =>(
            {...prev, [PostId]:!prev[PostId]}
        ));
    }
    

  return (
    <div className='Home'>
        
        
        {posts.length ? 
            posts.map((post) =>
                <div className='post' key={post.id}>
                    <div className='postheader'>
                        <h2>{post.title}</h2>
                        <BsThreeDotsVertical 
                            role='button'
                            onClick={()=>handleEditMenu(post.id)}
                        />
                        {editMenu[post.id]  && <EditMenuLayout id={post.id} />}
                    </div>
                    <img src={post.img} alt="No Image" />
                    <div className='like-comment' >
                    <div className={`heart ${post.heart === true ? 'red':'black'}`}  onClick={()=>handleLike(post.id, post.heart)} >
                        {post.heart === true ? <FaHeart /> : <FaRegHeart />} <p className='black'>{post.heartcount}</p>
                    </div>
                    <div className='comment'>
                        <FaRegCommentDots />
                    </div>                   
                </div>
                 <p>
                    {showFullContentId[post.id]  
                        ? post.body 
                        : post.body.length <= 50 
                        ? post.body 
                        : `${post.body.slice(0, 50)}...`
                    }
                    <span onClick={() => handleShowFullContent(post.id)}>
                        {showFullContentId[post.id] ? " Less" : " More"}
                    </span>
                </p>


            </div>
        ) 
        : <p>No Post Avaliable</p>    
    }
    </div>
  )
}

export default Home