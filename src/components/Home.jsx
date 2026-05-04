import React from 'react'
import MovieDetails from './MovieDetails.jsx'
import Allmovies from './Allmovies.jsx'


function Home({filteredMoviesByName}) {



  return (
    <div class = ' flex justify-between text-black'>    
    <MovieDetails/>    
        <Allmovies filteredMoviesByName={filteredMoviesByName} />            
        
    </div>
  )
}

export default Home
