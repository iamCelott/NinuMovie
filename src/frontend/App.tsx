import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AllMovies from "./pages/allmovies";
import Categories from "./pages/categories";
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
    path: "/categories",
    element: <Categories />,
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
