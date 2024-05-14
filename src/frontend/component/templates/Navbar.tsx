import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
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
              <Link to="/all" className="hover:text-slate-200">
                All Movies
              </Link>
            </li>
            <li>
              <Link to="categories" className="hover:text-slate-200">
                Categories
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
              onChange={() => setChecked((prev) => !prev)}
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
    </>
  );
};

export default Navbar;
