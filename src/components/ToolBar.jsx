import React from 'react'
import { BrowserRouter, Route, Routes , useNavigate, Link } from 'react-router-dom'


function ToolBar() {
  return (
    <div>
         <div class = "bg-emerald-200 flex justify-around p-4 ">
              <Link to ='/' class="w-16 h-10 p-2 bg-blue-400 rounded-full font-bold text-black">בית</Link>
              <Link to ='/Delete' class="w-16 h-10 p-2 bg-blue-400 rounded-full font-bold text-black">מחיקה</Link>
              <Link to ='/Search' class="w-16 h-10 p-2 bg-blue-400 rounded-full font-bold text-black">חיפוש</Link>
              <Link to ='/Add' class="w-16 h-10 p-2 bg-blue-400 rounded-full font-bold text-black">הוספה</Link>
          </div>
    </div>
  )
}

export default ToolBar
