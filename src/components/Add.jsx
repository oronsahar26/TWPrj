import React from 'react'

function Add() {
  return (
    <div class = 'bg-gray-400 p-5 h-inline'>
             
        <div class = "bg-blue-400 h-inline w-inline p-2 absoulte">
          
            <h4 class = 'text-black'>Add a new movie</h4>  

            <div class = "flex justify-center ">

                <button class='bg-white w-22 h-22 rounded-full mt-6'>Add Movie</button>

                <div class='flex flex-col m-4'> 
                    <input type='text' placeholder='Movie Name' class = 'bg-white m-2'></input>
                    <input type='text' placeholder='Movie Picture' class = 'bg-white m-2'></input>
                    <input type='text' placeholder='Movie Description' class = 'bg-white m-2'></input>
                </div>
              
            </div>             

      </div>
    </div>
  )
}

export default Add
