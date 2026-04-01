import React from 'react'

function MovieDetails() {
  return (
    <div class = 'bg-gray-400 inline-full max-inline p-10'>
        <div class = "bg-purple-600 text-black-600 w-inline p-10 flex flex-col justify-items-start">
            <h4 class = 'text-left'>Movie Details: </h4>
            <h4 class = 'text-left'>My Movie Name: A</h4>
            <img src = "Movie.png" alt = "Image of the movie" height={30} width={30} ></img>
            <h4>Description: </h4>
            <div class = 'flex flex-row'>
                <div class = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div class = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div class = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div class = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div class = 'bg-blue-400 h-10 w-10 align-middle font-bold'>1</div>
                <div class ='h-10 w-10 align-middle font-bold'>5</div>
            </div>
            

        </div>
        
    </div>
  )
}

export default MovieDetails
