import axios from 'axios'
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuBookmarkPlus } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa6";

import React, { useEffect, useState } from 'react'

const Movies = () => {

    const [movies, setMovies] = useState([])

    const [watchlist, setWatchlist] = useState([])
    const [favorite, setFavorite] = useState([])

    // const getMovies =  () => {

    //   axios
    //   .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d3ebd1d2077b44692b9b30701dbe4be2`)
    //   .then(response =>{
    //    console.log(response)
    //    setMovies(response.data.results)
    //   })
    // }

    useEffect(() => {
        
      const getMovies = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d3ebd1d2077b44692b9b30701dbe4be2')
            console.log(response);
            
            setMovies(response.data.results)
         }
        
        getMovies()

        let watchListFromLocalStorage = JSON.parse(localStorage.getItem('mymovie')||'[]')
        setWatchlist(watchListFromLocalStorage)

        let favoriteFromLocalStorage = JSON.parse(localStorage.getItem('mymovieFav')||'[]')
        setFavorite(favoriteFromLocalStorage)
        
    }, [])

    const addToWatchlist = (movie)=>{
      let updatedWatchlist = [...watchlist, movie]
      //console.log(updatedWatchlist);
      
      setWatchlist(updatedWatchlist)
      localStorage.setItem('mymovie', JSON.stringify(updatedWatchlist))
    }


    const removeFromWatchlist = (movie)=>{
      let updatedWatchlist = watchlist.filter(watchlistMovie =>{
         return watchlistMovie.id !== movie.id
      })
      
      setWatchlist(updatedWatchlist)
      localStorage.setItem('mymovie', JSON.stringify(updatedWatchlist))
    
    }

    const showWishIcon =(movie)=>{
      return <div className='cursor-pointer' onClick={()=>addToWatchlist(movie)}>
      
      <FaBookmark/>
    </div>
    }
    
    const showRemoveWishIcon =(movie)=>{
      return <div className='cursor-pointer' onClick={()=>removeFromWatchlist(movie)}>
   
      <FaBookmark className='fill-yellow-500'/>
    </div>
    }
    
    
    
    const isAddedToWatchlist=(movieId)=>{
      return watchlist.some(movie=>{
        return movie.id === movieId
      })
    }


    const addToFavorite = (movie)=>{
      let updatedFavorite = [...favorite, movie]
      //console.log(updatedWatchlist);
      
      setFavorite(updatedFavorite)
      localStorage.setItem('mymovieFav', JSON.stringify(updatedFavorite))
    }

    const removeFromFavorite = (movie)=>{
      let updatedFavorite = favorite.filter(favoriteMovie =>{
         return favoriteMovie.id !== movie.id
      })
      
      setFavorite(updatedFavorite)
      localStorage.setItem('mymovieFav', JSON.stringify(updatedFavorite))
    
    }

    const showFavoriteIcon =(movie)=>{
      return <div className='cursor-pointer' onClick={()=>addToFavorite(movie)}>
      <FaHeart/>
    </div>
    }

    const showRemoveFavoriteIcon =(movie)=>{
      return <div className='cursor-pointer' onClick={()=>removeFromFavorite(movie)}>
         <FaHeart className='fill-yellow-500'/>
    </div>
    }

    const isAddedToFavorite=(movieId)=>{
      return favorite.some(movie=>{
        return movie.id === movieId
      })
    }
    

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
                          
                          <div className='flex justify-between items-center text-white text-left font-semibold pl-2 pt-1  rounded-b-lg w-[100%] h-17 bg-stone-900 bg-opacity-100'>
                          <div>
                            <div> {movie.original_title} ({movie.release_date}) </div>
                            <div className='flex items-center space-x-2'>
                              <div>{genreIDs[movie.genre_ids[0]]}/{genreIDs[movie.genre_ids[1]]}</div>
                              <CiStar/>
                              <div>{movie.vote_average}</div>
                            </div>
                          </div>
                           
                           <div>
                           <div className='flex justify-between space-x-4 p-4 ' >
                           <div>
                            {
                               isAddedToFavorite(movie.id)?showRemoveFavoriteIcon(movie):showFavoriteIcon(movie)
                            }
                            </div>
                            <div>
                            {
                               isAddedToWatchlist(movie.id)?showRemoveWishIcon(movie):showWishIcon(movie)
                            }
                            </div>
                            
                          </div>
                           </div>
                          </div>
                          
                            
                         </div>
      
      }
      
  return (
    <div className=''>
    <div className='text-Zxl text-white font-bold text-left  p-2 pl-6  '>Trending Movies</div>

    <div className='flex flex-wrap  justify-evenly'>
        
     {
      movies.map(movie=>{
        return getMovieCard(movie)
      })
    } 

      
    </div>
    </div>
  )
}

export default Movies