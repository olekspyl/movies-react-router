import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react";
import Header from './Header';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));




 const App = () => {
  return (
    <div>
      <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies/>}>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='/movies/:movieId/cast' element={<Cast/>}></Route>
            <Route path='/movies/:movieId/reviews' element={<Reviews />}></Route>
          </Route>
          </Route>
            <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
       </div>
  );
};

export default App;
