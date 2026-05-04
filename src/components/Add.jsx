import React, { useContext, useState } from 'react';  
import {AppContext} from './AppContext.jsx'



function Add() {

  // First we create the input temporary values 
  const [newMovieName, setNewMovieName] = useState('');  
  const [newMovieDescription, setNewMovieDescription] = useState('');
  const [newMoviePic, setNewMoviePic] = useState('');


  // Import the setMovieList function and the original moviesList from the context
  const {setMoviesList, moviesList} = useContext(AppContext);

  
  function addNewMovie()
  {
    if (newMovieDescription.length > 200 || newMovieDescription.length === 0)
    {
      alert("Description must be less than 200 characters and not empty");
    }

    else
    {

      debugger;

      const movieNameSplitArr = newMovieName.split(' ');
      const upperCaseMovieName = movieNameSplitArr.map(word => {
        let newword = word.charAt(0).toUpperCase() + word.slice(1);
        return newword;}
      );
      let correctedMovieName = upperCaseMovieName.join(' ');

      
      setMoviesList([...moviesList,  {
        id: moviesList.length + 1,
        name: correctedMovieName,
        rate: 999,
        description:newMovieDescription,
        pic: newMoviePic,
        countClicks : 0,
        totalRate : 0          
    }]);    

      setNewMovieName('');
      setNewMoviePic('');
      setNewMovieDescription('');
      alert("Movie added successfully");

    }

    

   
  }




  return (
    <div class = 'bg-gray-400 p-5 h-inline'>
             
        <div class = "bg-blue-400 h-inline w-inline p-2 absoulte">
          
            <h4 class = 'text-black'>Add a new movie</h4>  

            <div class = "flex justify-center ">

                <button onClick = {()=>addNewMovie()} class='bg-white w-22 h-22 rounded-full mt-6'>Add Movie</button>

                <form class='flex flex-col m-4'> 
                    <input value={newMovieName} onChange = {(e)=>setNewMovieName(e.target.value)}  type='text' placeholder='Movie Name' class = 'bg-white m-2'></input>
                    <input value={newMoviePic} onChange = {(e)=>setNewMoviePic(e.target.value)} type='text' placeholder='Movie Picture' class = 'bg-white m-2'></input>
                    <input value={newMovieDescription} onChange = {(e)=>setNewMovieDescription(e.target.value)}  type='text' placeholder='Movie Description' class = 'bg-white m-2'></input>
                </form>
              
            </div>             

      </div>
    </div>
  )
}

export default Add
