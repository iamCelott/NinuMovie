import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AllMovies from "./pages/allmovies";
import Genres from "./pages/genres";
import SearchMovie from "./pages/searchmovie";
import SingleMoviePage from "./pages/singlemoviepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allmovies",
    element: <AllMovies />,
  },
  {
    path: "/genres",
    element: <Genres />,
  },
  {
    path: "/genres/:urlid/:name",
    element: <Genres />,
  },
  {
    path: "/searchmovie/:name",
    element: <SearchMovie />,
  },
  {
    path: "/:id/:name",
    element: <SingleMoviePage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
