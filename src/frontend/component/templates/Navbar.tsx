import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="w-full h-12 bg-yellow-500 flex justify-between items-center text-white relative">
          <Link to="/">
            <h1 className="pl-10 text-xl font-bold hover:scale-110 duration-100">
              NinuMovie
            </h1>
          </Link>
          <ul className="sm:flex gap-10 pr-10 font-semibold hidden">
            <li>
              <Link to="/allmovies" className="hover:text-slate-200">
                All Movies
              </Link>
            </li>
            <li>
              <Link to="/genres" className="hover:text-slate-200">
                Genres
              </Link>
            </li>
            <li>
              <Link
                to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpVPbwjXXhGrvWnGrMBMrWhcWWvWVfLVTQrZXLzCvGnvdcPTHCzLKqMGHNLKSlvTBhQjx"
                target="_blank"
                className="hover:text-slate-200"
              >
                Get in Touch
              </Link>
            </li>
          </ul>

          <div
            id="hamburgerMenu"
            className="absolute flex flex-col gap-1 right-10 sm:hidden"
          >
            <input
              type="checkbox"
              onChange={handleOnChange}
              className="absolute w-5 h-5 opacity-0 z-20"
            />
            <div
              className={`w-5 h-1 bg-white transform transition-all duration-300 ${
                checked ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 bg-white transition-all duration-300 ${
                checked ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-1 bg-white transform transition-all duration-300 ${
                checked ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </nav>
      </header>
      <div
        className={`w-full ${
          checked == false ? "-top-32" : "top-12"
        } absolute backdrop-blur-lg bg-[rgba(255,255,255,0.1)] duration-300`}
      >
        <ul className="flex flex-col items-center">
          <Link to="/">
            <li className="py-3 text-white font-semibold hover:text-slate-300 cursor-pointer w-full text-center">
              Home
            </li>
          </Link>
          <Link to="/genres">
            <li className="py-3 text-white font-semibold hover:text-slate-300 cursor-pointer w-full text-center">
              Genres
            </li>
          </Link>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpVPbwjXXhGrvWnGrMBMrWhcWWvWVfLVTQrZXLzCvGnvdcPTHCzLKqMGHNLKSlvTBhQjx"
            target="_blank"
          >
            <li className="py-3 text-white font-semibold hover:text-slate-300 cursor-pointer w-full text-center">
              Get in Touch
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
