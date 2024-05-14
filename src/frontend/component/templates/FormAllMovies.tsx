import { useEffect, useState } from "react";
import MovieCard from "../fragments/MovieCard";
import SearchBar from "../fragments/SearchBar";
const FormAllMovies = () => {
  const [apiKey, setApiKey] = useState("40b266d08d1a01ba16b344d2ac66546b");
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
      );
      const result = await response.json();
      setData(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <div className="w-full text-white">
        <SearchBar />
        <div className="text-white select-none">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold pb-3">Popular Movies: </h1>
            <select
              name=""
              id=""
              className="w-32 h-7 outline-none rounded-t-lg"
            >
              <option selected value="">
                abc
              </option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>
          </div>
          <div className="flex pb-1 gap-3 overflow-auto relative scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.3)] scrollbar-track-[#1e1e1e]">
            {data.map((movie: any, index: number) => (
              <MovieCard
                href={`/${movie.id}/${movie.title}`}
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

export default FormAllMovies;
