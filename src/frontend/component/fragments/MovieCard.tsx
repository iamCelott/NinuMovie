import { Link } from "react-router-dom";
type MovieCardProps = {
  title: string;
  release_date: string;
  vote_average: string;
  img: string;
  href: string;
};
const MovieCard = ({
  title,
  release_date,
  vote_average,
  img,
  href,
}: MovieCardProps) => {
  return (
    <>
      <Link
        to={href}
        className="w-[31%] md:w-[23%] lg:w-[18%] flex-shrink-0 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
      >
        <div className="h-full p-2 flex flex-col justify-between">
          <div>
            {" "}
            <img src={img} alt={title} className="rounded-lg" />
            <h1 className="font-semibold pt-2 text-sm">{title}</h1>
          </div>
          <div className="pt-2">
            <span className="float-start text-sm">{release_date}</span>
            <span className="float-end text-sm">{vote_average}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
