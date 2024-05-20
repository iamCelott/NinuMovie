import { useState, useEffect } from "react";
import Input from "../elements/Input";
import MovieCard from "../fragments/MovieCard";
import SearchBar from "../fragments/SearchBar";
import Button from "../elements/Button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const FormGenres = () => {
  const { urlid, name } = useParams();
  const apiKey: string = "40b266d08d1a01ba16b344d2ac66546b";
  const [genresData, setGenresData] = useState([]);
  const [movieByGenres, setMovieByGenres] = useState([]);
  const [genreClicked, setGenreClicked] = useState(new Set());
  const [page, setPage] = useState(1);

  const getGenresApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?&api_key=${apiKey}`
      );
      const result = await response.json();
      setGenresData(result.genres);
    } catch (e) {
      console.log(e);
    }
  };

  const getMovieByGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${Array.from(
          genreClicked
        ).join(",")}&page=${page}`
      );
      const result = await response.json();
      setMovieByGenres(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getMovieByIdGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${urlid}`
      );
      const result = await response.json();
      setMovieByGenres(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (id: number) => {
    setGenreClicked((prev) => {
      const newGenreClicked = new Set(prev);
      if (newGenreClicked.has(id)) {
        newGenreClicked.delete(id);
      } else {
        newGenreClicked.add(id);
      }
      return newGenreClicked;
    });
  };

  const handleClick = () => {
    getMovieByGenres();
  };

  const roundToOneDecimal = (num: number) => Math.round(num * 10) / 10;

  useEffect(() => {
    getGenresApi();

    if (urlid == null) {
      getMovieByGenres();
    } else {
      getMovieByIdGenres();
    }
  }, [page, urlid]);
  return (
    <>
      <div className="w-full text-white">
        <SearchBar />
        {urlid != null ? (
          <>
            {" "}
            <h1 className="text-4xl font-bold py-5">Result by Genre: {name}</h1>
          </>
        ) : (
          <></>
        )}
        <ul className="w-full flex flex-wrap gap-3 justify-evenly">
          {genresData.map((item: any, index: number) => (
            <li
              key={index}
              className="flex gap-2 items-center rounded-lg px-3 w-40 py-3 bg-[rgba(255,255,255,0.2)]"
            >
              <Input
                onChange={() => handleChange(item.id)}
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-nowrap">{item.name}</span>
            </li>
          ))}
          <Link to="/genres">
            <Button
              variant="primary"
              className="rounded-lg"
              onClick={handleClick}
            >
              Find Movie {">  "}
            </Button>
          </Link>
        </ul>
        <div className="flex justify-center mt-5 gap-3 relative flex-wrap">
          {movieByGenres.map((movie: any, index: number) => (
            <MovieCard
              href={`/${movie.id}/${movie.title}`}
              key={index}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              release_date={movie.release_date}
              title={movie.title}
              vote_average={
                typeof movie.vote_average === "number"
                  ? roundToOneDecimal(movie.vote_average)
                  : ""
              }
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-5 py-10">
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

export default FormGenres;
