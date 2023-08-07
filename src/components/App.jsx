import { Route, Routes } from "react-router-dom";
import * as Page from '../pages'
import { SharedLayout } from "./sharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Page.Home/>}></Route>
          <Route path='/movies' element={<Page.Movies />}></Route>
          <Route path='/movies/:movieId' element={<Page.MovieDetails />} >
              <Route path='cast' element={<Page.Cast />}></Route>
              <Route path='reviews' element={<Page.Reviews />}></Route>
          </Route>
       </Route>
    </Routes>
    
  );
};


