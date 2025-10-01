import { createContext,useState ,useEffect } from "react";
import api from '../api/posts'



const DataContext = createContext({})

export const DataProvider = ({children})=>{


const [posts ,setPosts ] = useState([])
const [postTitle ,setPostTitle]=useState('');
const [postBody ,setPostBody]=useState('');
const [editTitle ,setEditTitle]=useState('');
const [editBody ,setEditBody]=useState('');
const [searchResult, setSearchResult] = useState([])
const [search, setSearch] = useState('');



useEffect(()=>{

  const feachAPI = async ()=>{
    try{
    const res = await api.get("/posts")
    setPosts(res.data)
    }
    catch(err){
      console.log(err.message)
    }
  }
feachAPI()
},[])


useEffect(()=>{
   const resultPost = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
   setSearchResult(resultPost.reverse())
  },[posts , search])


    return (
        <DataContext.Provider value={{
        posts ,setPosts ,
        postTitle ,setPostTitle,
        postBody ,setPostBody,
        editTitle ,setEditTitle,
        editBody ,setEditBody,
        searchResult, setSearchResult,
        search, setSearch 

        }}>{children}</DataContext.Provider>

        
    )
}


export default DataContext;