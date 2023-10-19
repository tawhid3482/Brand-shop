import { Link, NavLink } from "react-router-dom";
import UseHook from "../UseHook/UseHook";
import pf from "../../public/images/3135715.png";
import logo from '../../public/images/chanel_logo_the_branding_journal.jpg';
const Header = () => {
  const { user, logOut } = UseHook();

  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/addCart"> My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/aboutDetails">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
         <img src={logo} className="w-16" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img src={pf} alt="" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm">{user.displayName}</button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
