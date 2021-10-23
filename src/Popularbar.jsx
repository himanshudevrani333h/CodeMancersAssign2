import "./pbar.css";
import Cards from "./Cards";
import { PopularCreate } from "./redux/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Popularbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [PopularState, setPstate] = useState([]);

  state.then((data) => {
    console.log("line 12", data.pState);
    setPstate(data.pState);
  });

  useEffect(() => {
    dispatch(PopularCreate());
    console.log(PopularState);
  }, []);

  return (
    <div className="pbcontainer">
      {PopularState.length > 0
        ? PopularState.map((el) => {
            console.log("image ", el.poster_path);
            return <Cards data={el} st={"pState"} />;
          })
        : ""}
    </div>
  );
};

export default Popularbar;
