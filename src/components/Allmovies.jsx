import {AppContext} from './AppContext.jsx'

import React, { useContext } from 'react'; 


function Allmovies({filteredMoviesByName}) {

  const {setMovieDetails} = useContext(AppContext);

  return (
    <div>         
          <p className='text-black-600 p-2 bg-gray-400'>AllMovies</p>
          
          <div>
            

             {filteredMoviesByName?.slice(0,5).map((item) => (

             <div key = {item.id}  onClick={()=>setMovieDetails(item)} className='relative h-24 w-full max-w-[200px] border-b-4 border-gray-200 overflow-hidden flex items-center justify-center cursor-pointer'>
                <img src = {item.pic} alt = "Image of the movie" className = "absolute inset-0 w-full h-full object-cover" ></img>
                <div className='absolute inset-0 bg-black/35'></div>
                <span className='relative z-10 text-white font-bold text-center px-1'>{item.name}</span>
              </div>


              ))} 
        



          </div>            
    </div>
  )
}

export default Allmovies
