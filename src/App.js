import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobNav from './components/MobNav';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Wishlist from './components/Wishlist';
import Favorite from './components/Favorite';

function App() {
  useEffect(() => {
    const handleOnline = () => toast.success('You are now in online mode.');
    const handleOffline = () => toast.warn('You are now in offline mode.');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
    
    <BrowserRouter >
      <Navbar/>
     
      <Routes>
        <Route path="/" element ={
          <>
             <Movies/>
          </>
          
        }
        />

        <Route path="/Watchlist" element ={
          <>
          <Wishlist />
          </>
          
          
        }
        />
        <Route path="/Favorites" element ={
          <>
          <Favorite/>
          </>
          
          
        }
        />
          
         </Routes>
       
         <MobNav/>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </BrowserRouter>
      
    </>
  );
}

export default App;
