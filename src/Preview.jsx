import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { UpcomingCreate, PopularCreate, TopRatedCreate } from "./redux/action";
import "./preview.css";
const Preview = () => {
  const state = useSelector((state) => state);
  const [prevState, setPstate] = useState({});
  // data from params is recieved 
  const { id, recv } = useParams();
  const dispatch = useDispatch();
 
  // state is a promise so to resolve we use .then
  state.then((data) => {
    // second param is used to find the right state
    if (recv == "pState") {
      let data_ = data.pState.filter((e) => {
        return e.id == id;
      });
      
      // data is set into setPstate function  provided by useState hook
      // data_[0] is used because filter gives a set of array
      setPstate(data_[0]);
    } else if (recv == "uState") {
      let data_ = data.uState.filter((e) => {
        return e.id == id;
      });
      setPstate(data_[0]);
    } else {
      let data_ = data.tState.filter((e) => {
        return e.id == id;
      });
      setPstate(data_[0]);
    }
  });

  // After refreshing the page the previous state sata was removed because code runs from start in this component
  // to resolve that issue and to persist the data we need to dispatch action 
  useEffect(() => {
    // to remove the active class from navbar Home
    let a = document.querySelectorAll(".nav-link");
    a[0].classList.remove("active");

    // for dispatching action by using params data
    if (recv == "tState") {
      dispatch(TopRatedCreate());
    } else if (recv == "uState") {
      dispatch(UpcomingCreate());
    } else {
      dispatch(PopularCreate());
    }
  }, []);

  return (
    <div className="previewContainer">
      <div className="upperbox">
        {console.log("data prev", prevState)}
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
