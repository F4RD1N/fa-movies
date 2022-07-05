import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Account from "../../icons/account.png";
import UserDetails from "../Authentication/UserDetails";
import Loader from "../Loader";
//Login Context
import { useAuthContext } from "../../context/AuthContext";

const Searchbar = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const { user, loading } = useAuthContext();
  const [openDetails, setOpenDetails] = useState(false);
  const clickHandler = (event) => {
    if (buttonRef.current.classList.contains("ri-arrow-left-line")) {
      navigate(-1, { replace: true });
    }
  };

  const userDetailsHandler = () => {
    !openDetails ? setOpenDetails(true) : setOpenDetails(false);
  };

  //NavBar Controll
  const navbarRef = useRef(null);
  useEffect(() => {
    const navBarControllWhileScrolling = () => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (navbarRef.current && navbarRef.current.style) {
          if (prevScrollpos > currentScrollPos) {
            navbarRef.current.style.transform = "translateY(0)";
          } else {
            navbarRef.current.style.transform = "translateY(-50px)";
          }
          prevScrollpos = currentScrollPos;
        }
      };
    };
    navBarControllWhileScrolling();
  }, []);
  return (
    <nav
      className="searchbarGradient h-16 fixed top-0 w-full z-20 p-4 text-white transition-all"
      id="navbar"
      ref={navbarRef}
    >
      {openDetails && (
        <UserDetails
          name={user && user.displayName}
          openDetails={setOpenDetails}
        />
      )}
      <ul className="flex justify-between items-center text-2xl md:text-3xl">
        {user ? (
          <div
            onClick={userDetailsHandler}
            className="w-7 md:w-9 invert rounded-full overflow-hidden cursor-pointer select-none"
          >
            {user.photoURL ? (
              <img src={user.photoURL} />
            ) : (
              <div className="w-7 h-7 md:w-9 md:h-9 bg-red-500 flex justify-center items-center text-base  ">
                {user.displayName && user.displayName.slice(0, 1)}
              </div>
            )}
          </div>
        ) : (
          <div className="w-7 h-7 md:w-9 md:h-9">
            {!loading ? (
              <Link
                to="/signin"
                className="w-7 md:w-9 invert rounded-full overflow-hidden"
              >
                <img src={Account} />
              </Link>
            ) : (
              <Loader />
            )}
          </div>
        )}
        <Link to="/" className="appTitle">
          FaMovie
        </Link>
        <NavLink
          ref={buttonRef}
          onClick={clickHandler}
          to="/search"
          className={({ isActive }) =>
            isActive ? "ri-arrow-left-line" : "ri-search-line"
          }
        ></NavLink>
      </ul>
    </nav>
  );
};

export default Searchbar;
