import Feeds from './Feeds'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Home = () => {

  const {searchResult} = useContext(DataContext)

  return (
    <div className='home'>
       <h2>All Posts</h2>
       <ul>
        
         <Feeds posts={searchResult} />
       </ul>
   
   </div>
  )
}

export default Home
