import { useEffect, useState } from "react";
import Button from "../elements/Button";
import MovieCard from "../fragments/MovieCard";
import SearchBar from "../fragments/SearchBar";
const FormAllMovies = () => {
  const [apiKey, setApiKey] = useState("40b266d08d1a01ba16b344d2ac66546b");
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("Popular");
  const [page, setPage] = useState(1);

  const fetchAPI = async () => {
    try {
      let url: string = "";
      if (sortBy === "Popular") {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
      } else if (sortBy === "Top Rated") {
        url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`;
      } else if (sortBy === "Release Date") {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=primary_release_date.asc&page=${page}`;
      } else if (sortBy === "Upcoming") {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=primary_release_date.desc&page=${page}`;
      }
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: any) => {
    setSortBy(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    fetchAPI();
  }, [sortBy, page]);
  return (
    <>
      <div className="w-full text-white">
        <SearchBar />
        <div className="text-white select-none">
          <div className="flex justify-between items-center pb-3">
            <h1 className="text-2xl font-semibold pb-3">Sort by: </h1>
            <select
              name=""
              id=""
              onChange={handleChange}
              className="w-40 h-10 font-semibold rounded-t-lg bg-[#1e1e1e] px-2 border-[2px] border-[rgba(255,255,255,0.2)] outline-none "
            >
              <option
                selected
                value="Popular"
                className="bg-[#1e1e1e] font-semibold"
              >
                Popular
              </option>
              <option value="Top Rated" className="bg-[#1e1e1e] font-semibold">
                Top Rated
              </option>
              <option
                value="Release Date"
                className="bg-[#1e1e1e] font-semibold"
              >
                Release Date
              </option>
              <option value="Upcoming" className="bg-[#1e1e1e font-semibold">
                Upcoming
              </option>
            </select>
          </div>
          <div className="flex justify-center pb-1 gap-3 relative flex-wrap">
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
        <div className="flex justify-center items-center gap-3 py-10">
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() =>
              setPage(
                page > 1 ? (prev) => (prev -= 1) : (prev) => (prev = prev)
              )
            }
          >
            {"<"}
          </Button>
          <span>{page}</span>
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() => setPage((prev) => (prev += 1))}
          >
            {">"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormAllMovies;
