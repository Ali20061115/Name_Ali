import React, { useState } from "react";
import "./Tailwind.css"
function Tailwind (){
    return(
        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://i.pinimg.com/736x/48/9e/4d/489e4d5b2fdd616bcf65ff6f9a950504.jpg" />
        </div>
        <div class="flex items-center md:items-start">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>.</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    )
  

}
export default Tailwind