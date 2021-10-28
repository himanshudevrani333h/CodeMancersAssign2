import "./pbar.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { topratedFetch } from "./redux/action";
import Cards from "./Cards";
const Toprated = () => {
  const state = useSelector((state) => state);
  console.log("toprated state",state);
  const [topRatedState, setTopRated] = useState([]);
  const dispatch = useDispatch();

   // state gives us a promise so to resolve promise we use .then
  state.then((data) => {
    console.log("trsatae", data.tState);
    setTopRated(data.tState);
  });

  useEffect(() => {
    dispatch(topratedFetch());
  }, []);

  return (
    <div className="trcontainer">
      {topRatedState
        ? topRatedState.map((el,i) => {
            return <Cards data={el} st={"tState"} key={i} />;
          })
        : ""}
    </div>
  );
};

export default Toprated;
