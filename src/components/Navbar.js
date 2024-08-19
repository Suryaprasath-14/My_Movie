import React from 'react'
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className=' sticky top-0 w-full z-20 bg-black p-4 shadow-lg '>
       {/* Using <Link /> here instead of <a /> to harness the power of react's client side rendering */}
         <div className='text-white flex justify-between'>
         <div className='flex space-x-12 pr-4'>
           <p className='pl-2 sm:pl-8 font-semibold text-lg'>Hello, User!</p>
           <Link className='sm:flex hidden ' to='/'>Home</Link>
         </div>
         <input type='search' id='search' placeholder='search' className=' sm:flex hidden text-black bg-stone-200 mx-4 px-8 py-3 h-7 
              outline-none text-sm shadow-md  sm:w-[20%] md:w-[30%] lg:w-[40%] rounded-lg'></input>
        <div className='hidden sm:flex text-right space-x-16 '>
          <Link  to='/Watchlist'>Watchlist</Link>
          <Link className='pr-8' to='/Favorites'>Favorites</Link>
        </div>
        <div className='flex items-center'>
       
        <div className='px-4 sm:hidden'><FaSearch className='text-lg font-bold'/></div>
        <div className='pr-1 text-center'><FaFilter/></div>
        <div>Filter</div>
        </div>
        </div>
    </nav>

    
    


   
  )
}

export default Navbar