import "./pbar.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { TopRatedCreate } from "./redux/action";
import Cards from "./Cards";
const Toprated = () => {
  const state = useSelector((state) => state);
  const [topRatedState, setTopRated] = useState([]);
  const dispatch = useDispatch();
  state.then((data) => {
    setTopRated(data.tState);
  });

  useEffect(() => {
    dispatch(TopRatedCreate());
  }, []);

  return (
    <div className="trcontainer">
      {topRatedState.length > 0
        ? topRatedState.map((el) => {
            return <Cards data={el} st={"tState"} />;
          })
        : ""}
    </div>
  );
};

export default Toprated;