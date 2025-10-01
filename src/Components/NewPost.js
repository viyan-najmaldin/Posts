import { useContext } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/posts'
import { useNavigate } from 'react-router-dom';



const NewPost = () => {

  const   { postTitle, setPostTitle,posts,setPosts,  postBody,  setPostBody} = useContext(DataContext)
  const navigate = useNavigate();

  const handleClickAdd = async (e)=>{
      e.preventDefault();
      const postList = {  title: postTitle,   body: postBody }
      try{
        const res = await api.post("/posts" , postList)
      setPosts([...posts, res.data])
    console.log(posts)
    navigate(`/`)
    setPostTitle("")
    setPostBody("")
      } catch(err){
        console.log(err.message)
      }
    }



  return (
    <div className='newpost'>
      <h3> Add New Post</h3>

      <form className='addForm' onSubmit={handleClickAdd}>
       <div className='formitem'>
            <label htmlFor='title'> Title </label>
            <input value={postTitle}
                  onChange={(e)=>setPostTitle(e.target.value)} 
                  type='text' id='body' 
                  placeholder='Write the post title'/>
       </div>
     
       <div className='formitem body'>
            <label htmlFor='body'> Body </label>
            <textarea id='body' 
            value={postBody}  
            onChange={(e)=>setPostBody(e.target.value)} 
            placeholder='Type post body' /> 
        </div> 
        
        <input className='btn' type="submit" value="Add" />
      </form>
    </div>
  )
}

export default NewPost
