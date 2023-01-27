import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Reviews from '../pages/Reviews';
import Cast from '../pages/Cast';
import MovieDetails from '../pages/MovieDetails';
import Home from '../pages/Home';
import NotFound from 'pages/NotFound';
import Movies from 'pages/Movies';

 const App = () => {
  return (
    <div>
      <Header />
    <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies/>}>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='/movies/:movieId/cast' element={<Cast/>}></Route>
            <Route path='/movies/:movieId/reviews' element={<Reviews />}></Route>
          </Route>
          </Route>
          
            <Route path="*" element={<NotFound />} />
      </Routes>
       </div>
  );
};

export default App;
