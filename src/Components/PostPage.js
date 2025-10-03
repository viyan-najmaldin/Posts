import { useParams, useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/posts'


const PostPage = () => {
  const {posts, setPosts } = useContext(DataContext)
  const {id} = useParams();
  const navigate = useNavigate();
  const onePost = posts.find((postt)=>  String(postt.id)=== (id))
 
  const handleDelete = async (id) => {
      try{ 
        console.log("Deleting post id:",id)
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
       navigate(`/`)
      } catch(err){
     console.log(`Error: ${err.message}`);
      }
    }
   
    if (!onePost) {
    navigate("/"); 
    return null;  
  }
 
  return (
    <div className='onepost'>
        <h3> Title : {onePost.title} </h3>
        <p> {onePost.body  }</p>
 
  <button className='btns' onClick={()=>handleDelete(onePost.id)}>Delete Post</button>
 <Link to={`/edit/${id}`}><button className='btns edits'>Edit Post</button>
</Link>
    </div>

  )
}

export default PostPage
