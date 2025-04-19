import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Card = ({ name, type, uid }) => {
    const { dispatch } = useGlobalReducer()
  
  return (
    <React.Fragment>
      <div className="card" style={{ minWidth: "18rem", minHeight: "15rem" }}>
        <img
          src="https://lh5.googleusercontent.com/proxy/h69fF1tAyUHXeAosP6u7DIeYqYI5S8X-lbYG964TZkmkoly3voFk4wQpWGG0wGLkn7diFyvk8nLUuf0"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"></p>
          <div className="d-flex justify-content-between">

            <div>
              <Link
                to={`/single/${type}/${uid}`}
                className="btn btn-outline-primary"
              >
                Learn more!
              </Link>
            </div>

            <div>
              <button 
              type="button"
               className=" btn btn-outline-warning"
               onClick={() => dispatch({ type: "ADD_FAVORITE", payload: name })}
               >
              <i class="fa-regular fa-heart"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
