import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";

export const Single = (props) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <React.Fragment>
      <div className="d-flex" style={{width: "100%"}}>
        <div style={{width: "40%"}}>
          <img
            src="https://www.brighterbites.org/wp-content/uploads/2016/04/placeholder-800x600.png"
            alt="Description"
            className="img-fluid"
            width="600"
            height="400"
            style={{ marginLeft: "10rem", marginTop: "5rem" }}
          />
        </div>
        <div style={{width: "40%",  marginLeft: "15rem", marginTop: "5rem"}}>
          <p style={{textAlign: "center", width: "70%"}}>

            
            
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
