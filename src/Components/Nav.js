import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

 
const Nav = () => {

  const {search , setSearch} = useContext(DataContext)
  return (
    <div className='Navv'>
       <form onSubmit={(e) => e.preventDefault()} >
         <label>Search</label>
         <input type="text"
         value={search}
         onChange={(e)=> setSearch(e.target.value)}
         placeholder="type to search" />
        </form>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/about">About</Link>
      </nav> 
    </div>
  )
}

export default Nav
