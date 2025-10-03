import { useParams, useNavigate } from 'react-router-dom'
import { useEffect ,useContext } from 'react';
import DataContext from '../context/DataContext';
// import api from '../api/posts'


const UpdatePost = () =>{

  const navigate = useNavigate();
  const {id} = useParams();
  const { posts,setPosts,  editTitle, setEditTitle,  editBody,  setEditBody}= useContext(DataContext)
  const onePost = posts.find((postt)=> String(postt.id) === (id))

 useEffect(() => {
    if (onePost) {
        setEditTitle(onePost.title);
        setEditBody(onePost.body);
    }
 }, [onePost, setEditTitle, setEditBody]);
  
  //  const handleClickEdit = async (id)=>{
   // e.preventDefault();
  //  console.log("viiii")
  //  const updateOne = {  title: editTitle,  body: editBody }
  //  try{
  //    const res = await api.put(`/posts/${id}`,  updateOne)
  //  // setPosts([...posts, res.data])
  //  setPosts(posts.map(post => post.id === id ? {...res.data} : post));
  // console.log(posts)
  // navigate(`/`)
  //  } catch(err){
  //    console.log(err.message)
  //  }
// }
  const handleClickEdit = (id) => {
  const updatedPost = { title: editTitle, body: editBody, id: id };
  setPosts(posts.map(post => post.id === id ? updatedPost : post));
  navigate(`/`);
};
 


  return (
   <div className='newpost'>
      <h3> Add New Post</h3>

      <form className='addForm'onSubmit={(e) => e.preventDefault()} >
       <div className='formitem'>
            <label htmlFor='title'> Title </label>
            <input value={editTitle}
                  onChange={(e)=>setEditTitle(e.target.value)} 
                  type='text' id='body' 
                  placeholder='Write the post title'/>
       </div>
     
       <div className='formitem body'>
            <label htmlFor='body'> Body </label>
            <textarea id='body' 
            value={editBody}  
            onChange={(e)=>setEditBody(e.target.value)} 
            placeholder='Type post body' /> 
        </div> 
        
        <button className='btn' onClick={()=>onePost && handleClickEdit(onePost.id)} type="submit" > Update </button>
      </form>
    </div>
  )
}

export default UpdatePost
