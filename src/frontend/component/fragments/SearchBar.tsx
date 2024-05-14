import { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:pt-14 sm:pb-10 pt-7 pb-5">
        <label
          htmlFor="searchFilm"
          className="text-white font-semibold text-lg pr-5 text-nowrap select-none"
        >
          Find the Movie:
        </label>
        <div className="w-full flex">
          <Input
            type="text"
            className="w-full h-10 text-black"
            name="searchFilm"
            onChange={(e: any) => setInputQuery(e.target.value)}
          />
          <Link to={`/searchmovie/${inputQuery}`}>
            <Button variant="dark" className="select-none">
              Search!
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
