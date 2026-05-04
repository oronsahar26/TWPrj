import {AppContext} from './AppContext.jsx'
import React, { useContext } from 'react';  

 



function MovieDetails() {


 

  const {movieDetails, setMovieDetails, UpdateMovieDetails} = useContext(AppContext);
  
  function UpdateMovieRate(rate)  
  {
      movieDetails.id = Date.now();
      movieDetails.countClicks++;
      movieDetails.totalRate += rate;
      movieDetails.rate = movieDetails.countClicks ? (movieDetails.totalRate / movieDetails.countClicks) : 0;

      UpdateMovieDetails(movieDetails);

  }
  



  return (
    <div className = 'bg-gray-400 w-full min-w-0 max-w-full box-border p-[20px]'>
        <div className = "bg-purple-600 text-black w-full max-w-full min-w-0 box-border p-10 relative block break-words overflow-hidden">
        <div className='relative w-full max-w-[300px] h-[180px] overflow-hidden rounded-lg mx-auto'>
                    <h4>movie name: {movieDetails.name}</h4>
                    <img src={movieDetails.pic} alt='spider man' className='block w-full h-full object-cover' />
                    <span className='absolute inset-0 flex items-center justify-center text-white font-bold'>{movieDetails.name}</span>
                </div>
            <h4>Description: {movieDetails.description}</h4>
            <div className = 'flex flex-row'>
                <div onClick={()=>UpdateMovieRate(1)} className = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div onClick={()=>UpdateMovieRate(2)} className = 'bg-blue-400 h-10 w-10 align-middle font-bold'>2</div>
                <div onClick={()=>UpdateMovieRate(3)} className = 'bg-blue-400 h-10 w-10 align-middle font-bold'>3</div>
                <div onClick={()=>UpdateMovieRate(4)} className = 'bg-blue-400 h-10 w-10 align-middle font-bold'>4</div>
                <div onClick={()=>UpdateMovieRate(5)} className = 'bg-blue-400 h-10 w-10 align-middle font-bold'>5</div>
                <div className ='h-10 w-10 align-middle font-bold'> {movieDetails.rate}</div>
            </div>
            

        </div>
        
    </div>
  )
}

export default MovieDetails
