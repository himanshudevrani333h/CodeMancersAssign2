import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { UpcomingCreate, PopularCreate, TopRatedCreate } from "./redux/action";
import "./preview.css";
const Preview = () => {
  const state = useSelector((state) => state);
  const [prevState, setPstate] = useState({});
  const { id, recv } = useParams();
  const dispatch = useDispatch();
  console.log(id, recv);
  console.log("satte", state);
  state.then((data) => {
    if (recv == "pState") {
      let data_ = data.pState.filter((e) => {
        return e.id == id;
      });
      console.log("data 17 ", data_);
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

  useEffect(() => {
    let a = document.querySelectorAll(".nav-link");
    a[0].classList.remove("active");
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
