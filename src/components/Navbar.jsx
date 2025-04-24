import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-black bg-black">
      <div className="container">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png"
            alt=""
            style={{ width: "150px", height: "80px", objectFit: "cover" }}
          />
        </Link>

        <div className="ml-auto">
          <div className="btn-group">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              Favorites ({store.favorites.length})
            </button>

            <ul className="dropdown-menu">
              <li>
                {store.favorites.length > 0 ? (
                  store.favorites.map((fav, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between
                      align-items-center"
                    >
                      <a className="dropdown-item" href="#">
                        {fav}
                      </a>
                      <button
                        className="btn btn-sm btn-danger ms-2"
                        onClick={() =>
                          dispatch({ type: "REMOVE_FAVORITE", payload: fav })
                        }
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  ))
                ) : (
                  <a className="dropdown-item" href="#">
                    No favorites
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
