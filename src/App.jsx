import './App.css'
import BestMovie from './components/BestMovie.jsx'
import ToolBar from './components/ToolBar.jsx'
import MoviesList from './components/MoviesList.jsx'
import Home from './components/Home.jsx'

import Search from './components/Search.jsx'
import Add from './components/Add.jsx'
import Delete from './components/Delete.jsx'

import { BrowserRouter, Route, Routes , useNavigate } from 'react-router-dom'


function App() {

  return (
    <>
     <div>


     

      
      


          <BrowserRouter>  
            <BestMovie />
            <ToolBar /> 
            <MoviesList />
              

            <Routes>
                
                <Route path='/' element = {<Home/>}/>
                <Route path='/Add' element = {<Add/>}/>
                <Route path='/Delete' element = {<Delete/>}/>
                <Route path='/Search' element = {<Search/>}/>


                
            </Routes>
        
          </BrowserRouter>

      </div>



      
    </>
  )
}

export default App
