import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {  singleMovieFetch } from "./redux/action";
import "./preview.css";
const Preview = () => {
  const state = useSelector((state) => state);
  const [prevState, setPstate] = useState({});
  const { id} = useParams();
  const dispatch = useDispatch();
 
  state.then((data)=>{
    setPstate(data)
  })

  useEffect(() => {
    dispatch(singleMovieFetch(id))
  }, []);

  return (
    <div className="previewContainer">
      <div className="upperbox">
        {prevState ? (
          <img
            className="prevImg"
            src={`https://image.tmdb.org/t/p/w500${prevState.poster_path}`}
            alt="..loading"
          />
        ) : (
          ""
        )}
      </div>
      <div className="detailbox">
        <h1>{prevState ? prevState.title : ""}</h1>
        <p className="prevPara">{prevState ? prevState.overview : ""}</p>
        <br></br>
        <br></br>
        <h5>Release Date: {prevState ? prevState.release_date : ""}</h5>
        <br></br>
        <h6>Rating: {prevState ? prevState.vote_average : ""}</h6>
      </div>
    </div>
  );
};

export default Preview;
