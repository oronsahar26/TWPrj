import React, { useContext, useState } from 'react';  
import MovieDetails from './MovieDetails';
import {AppContext} from './AppContext.jsx'
 

function Search() {

  const [movieToSearch, setMovieToSearch] = useState('');
  
  const {moviesList, setMovieDetails} = useContext(AppContext);

 
  const [foundMovies, setFoundMovies] = useState([]);

  function searchMovie()
  {
    // If the movie to search is not empty, search for the movie
    const normalizedSearch = movieToSearch.trim().toLowerCase();

    if (normalizedSearch !== '')  
    {
      const filteredMovies = moviesList.filter(item =>
        item.name.toLowerCase().includes(normalizedSearch)
      );
    
      // If match movies found, shows the select dropdown
       if (filteredMovies.length > 1) {
         alert("Movies found");
         setFoundMovies(filteredMovies);
       }

       // If no movies found, show an alert
       else if (filteredMovies.length === 0) {
                setFoundMovies([]);
                alert("No movies found");
      }
      else if (filteredMovies.length === 1) {
        setMovieDetails(filteredMovies[0]);
      }
    }

    // If the movie to search is empty, show an alert
    else
    {
        alert("Please enter a valid movie name to search");
        setFoundMovies([]);
     }


  }

  function handleMovieSelection(movieName)
  {
    if(movieName)
    {
      setMovieDetails(moviesList?.find(item=>item.name == movieName));
    }
    
  }
      

  return (
      <div className='bg-gray-400 flex '> 
          <MovieDetails />

          <div className='border-l-2 border-black p-2 flex flex-col justify-center items-center'>
              <input value = {movieToSearch} onChange={(e)=>setMovieToSearch(e.target.value)} type = 'text' placeholder='movieName' className = 'm-10 bg-white h-10 text-center'></input>
              <button onClick = {()=>searchMovie()} className='bg-white w-22 h-22 rounded-full m-6 self-center'>Search Movie</button>
              <select className = {foundMovies.length ? 'visible' : 'invisible'} onChange={(e)=>handleMovieSelection(e.target.value)}>
                <option value="">בחר סרט</option>
                 {foundMovies?.map(item=>{
                  return <option key={item.id} value={item.name}  >{item.name}</option>
                })}

              </select>



          </div>
    </div>
  )
}

export default Search
