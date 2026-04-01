import React from 'react'

function Delete() {
  return (
    <div class = 'bg-gray-400 p-10'>

      <div class='flex flex-col bg-blue-400 p-3 items-center'>

          <h2>Delete Movie :(</h2>

          <div class = 'p-2 flex flex-col items-center'>
              <input type = 'text' placeholder='movieName' class = 'bg-white h-10 text-center'></input>
              <button class='bg-white w-22 h-22 rounded-full mt-6'>Delete Movie</button>
          </div>

      </div>
        
    </div>
  )
}

export default Delete
