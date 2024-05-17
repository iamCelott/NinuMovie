import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../elements/Button";
const FormSingleMoviePage = () => {
  const apiKey: string = "40b266d08d1a01ba16b344d2ac66546b";
  const [data, setData] = useState<any>([]);
  const { id } = useParams();

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const result = await response.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  const roundToOneDecimal = (num: number) => Math.round(num * 10) / 10;
  useEffect(() => {
    fetchAPI();
  }, [id]);
  return (
    <>
      <div className="w-full text-white md:pb-60">
        <div className="flex px-5 sm:px-0 pt-12 items-center gap-5">
          <Button
            onClick={() => window.history.back()}
            variant="transparent"
            className="rounded-full border-2 border-white md:w-14 md:h-14 lg:w-16 lg:h-16 lg:text-xl"
          >
            {"<"}
          </Button>
          <span className="lg:text-lg">Back to Previous Page</span>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 pt-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            className="w-2/4 md:w-2/5 lg:w-2/6 md:h-[405px] mx-auto md:mx-0 py-2 object-cover"
          />
          <div className="md:w-full flex flex-col items-center md:py-3 md:items-start">
            <h1 className="font-bold text-lg md:text-lg lg:text-3xl">
              {data.title}
            </h1>
            <p className="opacity-65 text-center md:text-left lg:text-lg md:pt-1 lg:pt-2">
              {data.tagline}
            </p>

            <div className="flex gap-3 text-sm md:text-sm md:gap-5 lg:text-lg pt-2">
              <span className="font-semibold">• {data.status}</span>
              <span className="font-normal">
                <span className="font-semibold">
                  •{" "}
                  {typeof data.popularity === "number"
                    ? roundToOneDecimal(data.popularity)
                    : ""}
                </span>{" "}
                Popularity
              </span>
              <span className="font-semibold">
                •{" "}
                {typeof data.vote_average === "number"
                  ? roundToOneDecimal(data.vote_average)
                  : ""}{" "}
                <span className="font-normal">({data.vote_count} ratings)</span>
              </span>
            </div>
            <div className="w-3/4 mx-auto md:mx-0 py-2">
              <h1 className="font-bold text-lg lg:text-xl pb-1">Genres: </h1>

              <ul className="flex gap-3">
                {data.genres &&
                  data.genres.map((genre: any, index: number) => (
                    <li
                      key={index}
                      className="text-xs bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] py-2 rounded-lg text-center w-1/3 sm:text-sm md:w-2/5 lg:text-lg font-semibold "
                    >
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-3/4 mx-auto md:mx-0 md:w-full pb-3">
              <h1 className="font-bold text-lg lg:text-xl">Overview: </h1>
              <p className="lg:text-lg lg:tracking-wide">
                {data.overview}{" "}
                <a
                  className="text-blue-500 underline text-xs lg:text-lg"
                  href={data.homepage}
                  target="_blank"
                >
                  Read more...
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/4 md:w-full mx-auto md:mx-0 py-2">
          <h1 className="font-bold text-lg lg:text-xl pb-1">
            Production Companies:{" "}
          </h1>

          <ul className="flex flex-col md:flex-row flex-wrap gap-3">
            {data.production_companies &&
              data.production_companies.map(
                (production_companies: any, index: number) => (
                  <li
                    key={index}
                    className="gap-3 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] p-2 rounded-lg w-[32%]"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${production_companies.logo_path}`}
                      className="h-[33px] text-nowrap"
                      alt={production_companies.name}
                    />
                    <h1 className="hidden sm:inline-block font-semibold pt-2">
                      {production_companies.name}
                    </h1>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FormSingleMoviePage;
