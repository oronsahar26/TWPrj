import React from 'react'
import MovieDetails from './MovieDetails'

function Search() {
  return (
    <div class = 'bg-gray-400 '>
          <MovieDetails />

          <div class = 'border-l-3 border-black p-2'>
              <input type = 'text' placeholder='movieName' class = 'm-10 bg-white h-10 text-center'></input>
              <button class='bg-white w-22 h-22 rounded-full mt-6'>Search Movie</button>


          </div>
    </div>
  )
}

export default Search
