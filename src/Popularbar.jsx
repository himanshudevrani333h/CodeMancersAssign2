import "./pbar.css";
import Cards from "./Cards";
import { pupularFetch} from "./redux/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Popularbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [PopularState, setPstate] = useState([]);

  // state gives us a promise so to resolve promise we use .then
  state.then((data) => {
    setPstate(data.pState);
  });

  useEffect(() => {
    dispatch(pupularFetch());
  },[]);

  return (
    <div className="pbcontainer">
      {PopularState
        ? PopularState.map((el,i) => {
            return <Cards data={el} st={"pState"} key ={i}/>;
          })
        : ""}
    </div>
  );
};

export default Popularbar;
