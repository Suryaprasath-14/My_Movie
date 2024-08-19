import { RiImageAddLine } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import React, { useEffect, useState } from 'react' 

const Wishlist = () => {

    const [movieWishlist, setMovieWishlist]=useState([])

    useEffect(()=>{
        let watchListFromLocalStorage = JSON.parse(localStorage.getItem('mymovie') || '[]')
        setMovieWishlist(watchListFromLocalStorage)
      },[])

      let genreIDs = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
      };
      const getMovieCard = movie =>{
        return <div key={movie.id}
                          className='w-[380px] h-[25vh] bg-cover bg-center m-4 md:h-[40vh] md:w-[300px] rounded-xl relative hover:scale-110 duration-500 flex items-end'
                          style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
                           }}
                           
                         >
                          {/* <div className='text-2xl p-2 rounded-xl bg-gray-200 absolute top-0.5 right-0.5 '
                          style={{
                            display:hovered===movie.id?'block' : 'none'
                          }}>
                            {
                              isAddedToWatchlist(movie.id)?showRemoveIcon(movie):showAddIcon(movie)
      
                            }
                              
                          </div> */}
                          
                          <div className='flex justify-between items-center text-white text-left font-semibold pl-2 pt-1  rounded-b-lg w-[100%] h-14 bg-stone-900 bg-opacity-100'>
                          <div>
                            <div> {movie.original_title} </div>
                            <div className='flex items-center space-x-2'>
                              <div>{genreIDs[movie.genre_ids[0]]}/{genreIDs[movie.genre_ids[1]]}</div>
                              <CiStar/>
                              <div>{movie.vote_average}</div>
                            </div>
                          </div>
                           
                           <div>
                           <div className='p-4 ' >
                            {/* {
                               isAddedToWatchlist(movie.id)?showRemoveWishIcon(movie):showWishIcon(movie)
                            } */}
                          </div>
                           </div>
                          </div>
                          
                            
                         </div>
      
      }
      
  return (
    <div className=''>
    <div className='text-Zxl text-white font-bold text-left  p-2 pl-6  '>Wishlisted Movies</div>

    <div className='flex flex-wrap  justify-evenly'>
        

     {
      movieWishlist.map(movie=>{
        return getMovieCard(movie)
      })
    } 
     <div style={{
     display:movieWishlist.length===0?'block' : 'none'
     }}>
     <div className="text-9xl mt-32 pl-32 sm:pl-40 text-white"> <RiImageAddLine/> </div>
     <div className="text-white text-wrap text-lg text-center pl-16 pr-16">you haven't added any movie to your Watchlist</div>
     <div/>
     
     </div>
     </div>
    </div>
  )
}

export default Wishlist