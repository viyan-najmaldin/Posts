import './App.css';
import { Route , Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import PageNotFound from './Components/PageNotFound';
import Nav from './Components/Nav';
import Footer from './Components/Footer'
import UpdatePost from './Components/UpdatePost';
import { DataProvider } from './context/DataContext'

function App() {


  return (
    <div className="App">
         <Header title="VIPOSTS" />
         <DataProvider >
         <Nav/>

         <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route exact path='/post'  element={<NewPost/>} />
          <Route exact path='/edit/:id'  element={<UpdatePost />} />
          <Route path='/post/:id'  element={<PostPage  />} />
          <Route path='*'  element={<PageNotFound />} />
         </Routes>
           </DataProvider>

         <Footer />

    </div>
  );
}

export default App;
