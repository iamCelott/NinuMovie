import { useEffect, useState } from "react";
import Hero from "../fragments/Hero";
import SearchBar from "../fragments/SearchBar";
import MovieCard from "../fragments/MovieCard";
import { Link } from "react-router-dom";
const FormHome = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  const getPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=40b266d08d1a01ba16b344d2ac66546b&sort_by=popularity.desc"
      );
      const result = await response.json();
      setPopularMovie(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getTopRatedMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=40b266d08d1a01ba16b344d2ac66546b&vote_count.gte=200"
      );
      const result = await response.json();
      setTopRatedMovie(result.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPopularMovie();
    getTopRatedMovie();
  }, []);
  return (
    <>
      <div className="w-full">
        <Hero />
        <SearchBar />
        <div className="text-white">
          <h1 className="text-2xl font-semibold pb-3">Popular Movies: </h1>
          <div className="flex pb-1 gap-3 overflow-auto relative scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.3)] scrollbar-track-[#1e1e1e]">
            {popularMovie.map((movie: any, index: number) => (
              <MovieCard
                href={`/${movie.title}`}
                key={index}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                release_date={movie.release_date}
                title={movie.title}
                vote_average={movie.vote_average.toFixed(1)}
              />
            ))}
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-semibold pb-3 pt-7">
            Recommendations:{" "}
          </h1>
          <div className="flex pb-1 gap-3 overflow-auto relative scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.3)] scrollbar-track-[#1e1e1e]">
            {topRatedMovie.map((movie: any, index: number) => (
              <MovieCard
                href={`/${movie.title}`}
                key={index}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                release_date={movie.release_date}
                title={movie.title}
                vote_average={movie.vote_average.toFixed(1)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHome;
