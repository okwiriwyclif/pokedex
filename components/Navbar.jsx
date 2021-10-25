import React from 'react'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export const Navbar = ({darkMode,setDarkMode}) => {
    
    return (
        
        <div className=" p-5 w-full bg-white sticky top-0 border-gray-200 dark:bg-gray-900  dark:border-gray-700 border-b  ">
         <div className="flex items-center justify-between maxwidthwrapper">
            <div></div>  <div className="text-center font-bold text-3xl"><Link href="/" >  Pokedex  </Link> </div> <div onClick={()=>setDarkMode(!darkMode)}> <DarkModeSwitch darkMode={darkMode} /> </div>
         </div> 
        </div>
        
    )
}
