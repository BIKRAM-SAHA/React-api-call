import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        {/* sm-screen menu starts */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-sm btn-ghost normal-case lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
          >
            <li>
              <Link to="/jokes" className="btn btn-sm btn-ghost normal-case">
                Jokes
              </Link>
            </li>
            <li>
              <Link to="/weather" className="btn btn-sm btn-ghost normal-case">
                Weather
              </Link>
            </li>
          </ul>
        </div>
        {/* sm-screen menu end */}
        <Link to="/" className="btn btn-sm btn-ghost normal-case text-xl">
          React-API
        </Link>
      </div>
      {/* lg-screen menu starts*/}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/jokes" className="btn btn-sm btn-ghost normal-case">
              Jokes
            </Link>
          </li>
          <li>
            <Link to="/weather" className="btn btn-sm btn-ghost normal-case">
              Weather
            </Link>
          </li>
        </ul>
      </div>
      {/* lg-screen menu ends */}
      <div className="navbar-end">
        <Link to="/about" className="btn btn-sm btn-ghost normal-case">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
