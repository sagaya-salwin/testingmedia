import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DeletePost.css';

const DeletePost = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => (post.id).toString() === id);

  // Handle case where post is undefined
  if (!post) {
    return <h2>Post not found</h2>;
  }

  const handleDelete = () => {
    setPosts(posts.filter((post) => (post.id).toString() !== id));
    navigate('/');
  };

  return (
    <div className="DeletePost">
      <div className="DeletePost-post">
        <h2>{post.title}</h2>
        <img src={post.img} alt="No Image" />
        <p>{post.body}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeletePost;
