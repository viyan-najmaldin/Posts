import { useParams, useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
// import api from '../api/posts'


const PostPage = () => {
  const {posts, setPosts } = useContext(DataContext)
  const {id} = useParams();
  const navigate = useNavigate();
  const onePost = posts.find((postt)=>  String(postt.id)=== (id))
      // const idd = (id)+1
    //  console.log("the is isss : "+idd)

  const handleDelete = async (id) => {
      // try{ 
        // console.log("Deleting post id:",id)
      // await api.delete(`/posts/${id}`)
      const postsListDelete = posts.filter(post => post.id !== id);
    console.log(postsListDelete)

    setPosts(postsListDelete);
      localStorage.setItem('post', JSON.stringify(postsListDelete)); 
     
       navigate(`/`)
      // } catch(err){
    //  console.log(`Error: ${err.message}`);
      // }
      
    }
   
    if (!onePost) {
    navigate("/"); 
    return null;  
  }
 
  return (
    <div className='onepost'>
        <h3> Title : {onePost.title}  </h3>
        <p className='datee'>{onePost.datetime}</p>
        <p> {onePost.body  }</p>
  <button className='btns' onClick={()=>handleDelete(onePost.id)}>Delete Post</button>
 <Link to={`/edit/${id}`}><button className='btns edits'>Edit Post</button>
</Link>
    </div>

  )
}

export default PostPage
