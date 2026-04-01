import React from 'react'
import MovieDetails from './MovieDetails.jsx'
import Allmovies from './Allmovies.jsx'


function Home() {
  return (
    <div class = ' flex justify-between text-black'>    
    <MovieDetails/>    
    <Allmovies />
            
        
    </div>
  )
}

export default Home
