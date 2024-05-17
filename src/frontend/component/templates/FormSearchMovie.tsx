import { useEffect, useState } from "react";
import SearchBar from "../fragments/SearchBar";
import { useParams } from "react-router-dom";
import MovieCard from "../fragments/MovieCard";
import Button from "../elements/Button";
const FormSearchMovie = () => {
  const apiKey: string = "40b266d08d1a01ba16b344d2ac66546b";
  const [data, setData] = useState([]);
  const { name } = useParams();
  const [page, setPage] = useState(1);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}&page=${page}`
      );
      const result = await response.json();
      setData(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [page, name]);

  return (
    <>
      <div className="w-full text-white">
        <div className="text-4xl font-semibold pt-7 lg:pt-14">
          <h1>Here's the result of: </h1>
          <span className="font-bold text-yellow-500 text-3xl">{name}</span>
        </div>
        <SearchBar />
        <div className="flex justify-center gap-3 relative flex-wrap">
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

export default FormSearchMovie;
