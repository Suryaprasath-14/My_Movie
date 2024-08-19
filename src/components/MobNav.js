import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { LuBookmarkPlus } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";

const MobNav = () => {
  return (
    
    <nav className=' sm:hidden fixed bottom-0 w-full z-20 bg-stone-900 p-4 h-20 shadow-lg '>
       {/* Using <Link /> here instead of <a /> to harness the power of react's client side rendering */}
         <div className=' text-white  items-center flex justify-between'>
           <div className='bg-clip-text hover:text-transparent bg-orange-700 text-center'>
            
           <Link className=' ' to='/'><FaHouse className='hover:fill-orange-700 mx-3 text-xl'/><span className='text-sm'>Home</span></Link>
           </div>
           <div className='bg-clip-text hover:text-transparent bg-orange-700 text-center'>
            
             <Link className='' to='/Watchlist'><LuBookmarkPlus className='hover:fill-orange-700 mx-4 text-xl'/><span className='text-sm'>Watchlist</span></Link>
             </div>
           <div className='bg-clip-text hover:text-transparent  bg-orange-700 text-lg text-center'>
           
            <Link className=' ' to='/Favorites'><FaHeart className='hover:fill-orange-700 mx-4  text-xl'/><span className='text-sm'>Favorites</span></Link>
            </div>
         </div>
    </nav>

    
    


   
  )
}

export default MobNav

{/* <div className='text-white flex justify-between'>
         <div className='flex space-x-12 pr-4'>
           <p className='pl-2 sm:pl-8 font-semibold text-lg'>Hello, User!</p>
           <Link className='sm:flex hidden ' to='/'>Home</Link>
         </div>
         <input type='search' id='search' placeholder='search' className=' sm:flex hidden text-black bg-stone-200 mx-4 px-8 py-3 h-8  
              outline-none text-sm shadow-md  sm:w-[20%] md:w-[30%] lg:w-[40%] rounded-lg'></input>
        <div className='hidden sm:flex text-right space-x-16 '>
          <Link  to='/Watchlist'>Watchlist</Link>
          <Link className='pr-8' to='/Favorites'>Favorites</Link>
        </div>
        </div> */}