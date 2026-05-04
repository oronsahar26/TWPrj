import './App.css'
import BestMovie from './components/BestMovie.jsx'
import ToolBar from './components/ToolBar.jsx'
import MoviesList from './components/MoviesList.jsx'
import Home from './components/Home.jsx'

import Search from './components/Search.jsx'
import Add from './components/Add.jsx'
import Delete from './components/Delete.jsx'
import movies from './data/script.js'


import {AppContext} from './components/AppContext.jsx'
import React, { useContext } from 'react';  


 

import { BrowserRouter, Route, Routes , useNavigate } from 'react-router-dom'
import { useState } from 'react'


function App() {

  const [moviesList, setMoviesList] = useState(movies);

  const filterdMoviesByRate = [...moviesList].sort(function (a, b) { return b.rate - a.rate });

  const filteredMoviesByName = [...moviesList].sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const [movieDetails, setMovieDetails] = useState(filterdMoviesByRate[0]);


  function UpdateMovieDetails(updatedMovieDetails)
  {
        debugger;
        const tempMovieList = moviesList.map((item)=>
        {
          if (item.id == updatedMovieDetails.id)
          {
              return updatedMovieDetails;
          }
          return item;
        }        
      )

      setMoviesList(tempMovieList);
      setMovieDetails(updatedMovieDetails);

      console.log(moviesList);
      console.log(movieDetails);

      debugger;
      
  }









  return (
    <>
     <div>   


      <AppContext.Provider value = {{movieDetails,setMovieDetails, UpdateMovieDetails, setMoviesList, moviesList }}>             
             
     
  

          <BrowserRouter>  
            <BestMovie />
            <ToolBar /> 
            <MoviesList filterdMoviesByRate = {filterdMoviesByRate}/>
              

            <Routes>
                
                <Route path='/' element = {<Home filteredMoviesByName = {filteredMoviesByName}/>}/>
                <Route path='/Add' element = {<Add/>}/>
                <Route path='/Delete' element = {<Delete/>}/>
                <Route path='/Search' element = {<Search/>}/>


                
            </Routes>
        
          </BrowserRouter>

        </AppContext.Provider>

      </div>



      
    </>
  )
}

export default App
