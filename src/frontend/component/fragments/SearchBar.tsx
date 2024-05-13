import Button from "../elements/Button";
import Input from "../elements/Input";
const SearchBar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:py-20 pt-10 pb-5">
        <label
          htmlFor="searchFilm"
          className="text-white font-semibold text-lg pr-5 text-nowrap"
        >
          Find the Movie:
        </label>
        <div className="w-full flex">
          <Input type="text" className="w-full h-10" name="searchFilm" />
          <Button variant="dark">Search!</Button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
