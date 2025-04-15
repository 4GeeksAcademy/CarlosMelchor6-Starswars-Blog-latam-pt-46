import { Link, useParams } from "react-router-dom";  
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import React from "react";

export const Single = props => {
  const { store } = useGlobalReducer()


  return (
    <React.Fragment>

      <h1>hola</h1>


    </React.Fragment>
  )
};


