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
    setPstate(data.pState);
  });

  useEffect(() => {
    dispatch(PopularCreate());
  }, []);

  return (
    <div className="pbcontainer">
      {PopularState.length > 0
        ? PopularState.map((el,i) => {
            return <Cards data={el} st={"pState"} key ={i}/>;
          })
        : ""}
    </div>
  );
};

export default Popularbar;
