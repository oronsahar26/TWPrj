import {AppContext} from './AppContext.jsx';
import React, { useContext } from 'react';


function MoviesList({filterdMoviesByRate}) {

  const {movieDetails, setMovieDetails} = useContext(AppContext);

  
  return (
    <div>
       <div class="bg-gray-400 flex justify-around text-black border-x border-3 border-black-600">
              
             {filterdMoviesByRate?.slice(0,3).map((item)=>{
                  return ( 
                  <div key = {item.id} onClick={() => setMovieDetails(item)} class="w-30 h-30  bg-blue-400  flex items-center justify-center">
                      <span class="font-bold text-black">{item.name}</span> 
                  </div>  ) }

             )}
              
             
          </div>
    </div>
  )
}

export default MoviesList
