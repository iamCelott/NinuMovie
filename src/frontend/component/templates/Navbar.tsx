import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0">
        <nav className="w-full h-12 bg-yellow-500 flex justify-between items-center text-white">
          <Link to="/">
            <h1 className="pl-10 font-bold hover:scale-110 duration-100">
              NinuMovie
            </h1>
          </Link>
          <ul className="flex gap-10 pr-10 font-semibold">
            <li>
              <Link to="" className="hover:text-slate-200">
                All Movies
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-slate-200">
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
        </nav>
      </header>
    </>
  );
};

export default Navbar;
