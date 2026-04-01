import React from 'react'

function MoviesList() {
  return (
    <div>
       <div class="bg-gray-400 flex justify-around text-black border-x border-3 border-black-600">
              <div class="w-30 h-30  bg-blue-400  flex items-center justify-center">
                <span class="font-bold text-black">Movie-1</span> 
              </div>
               <div class="w-30 h-30  bg-blue-400  flex items-center justify-center">
                <span class="font-bold text-black">Movie-2</span> 
              </div>
               <div class="w-30 h-30  bg-blue-400  flex items-center justify-center">
                <span class="font-bold text-black">Movie-3</span> 
              </div>                           
          </div>
    </div>
  )
}

export default MoviesList
