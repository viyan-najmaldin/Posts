import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';




const NewPost = () => {

  const   { postTitle, setPostTitle,posts,setPosts,  postBody,  setPostBody} = useContext(DataContext)
  const navigate = useNavigate();
      // console.log((posts[posts.length-1].id)+1)
 
  const handleClickAdd = async (e)=>{
      e.preventDefault();
      const datetimee = format(new Date(),  'yyyy-MM-dd HH:mm')
     const id = (posts.length? (posts[posts.length-1].id)+1 :1);
     
      const postList = {id, title: postTitle,   body: postBody,datetime: datetimee }
    console.log(posts)
    
    const updatedPosts = [...posts, postList];
setPosts(updatedPosts);
localStorage.setItem('post', JSON.stringify(updatedPosts));
    setPostTitle("")
    setPostBody("")
    navigate(`/`)
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
