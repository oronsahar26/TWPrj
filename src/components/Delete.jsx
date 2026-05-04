import React, { useContext, useState } from 'react';  

import {AppContext} from './AppContext.jsx'


function Delete() {

  const [movieToDelete, setMovieToDelete] = useState('');

  const {setMoviesList, moviesList} = useContext(AppContext);

  function deleteMovie(){

    if (moviesList.find((item)=>item.name==movieToDelete))
    {
        setMoviesList(
      
        moviesList.filter((item)=>item.name != movieToDelete) )

        setMovieToDelete('');
    }
    else
    {
        alert('Movie is not found');
    }

   

  }

  return (
    <div class = 'bg-gray-400 p-10'>

      <div class='flex flex-col bg-blue-400 p-3 items-center'>

          <h2>Delete Movie :(</h2>

          <div class = 'p-2 flex flex-col items-center'>
              <input  onChange={(e)=>setMovieToDelete(e.target.value)} value = {movieToDelete} type = 'text' placeholder='movieName' class = 'bg-white h-10 text-center'></input>
              <button onClick = {()=>deleteMovie()} class='bg-white w-22 h-22 rounded-full mt-6'>Delete Movie</button>
          </div>

      </div>
        
    </div>
  )
}

export default Delete
