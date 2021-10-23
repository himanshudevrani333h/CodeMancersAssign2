import "./pbar.css";
import { UpcomingCreate } from "./redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";

const Upcomingbar = () => {
  const state = useSelector((state) => state);
  const [upcomingState, setUpcoming] = useState([]);
  const dispatch = useDispatch();

  // state gives us a promise so to resolve promise we use .then
  state.then((data) => {
    setUpcoming(data.uState);
  });

  useEffect(() => {
    dispatch(UpcomingCreate());
  }, []);

  return (
    <div className="ubcontainer">
      {upcomingState.length > 0
        ? upcomingState.map((el, i) => {
            return <Cards data={el} st={"uState"} key={i} />;
          })
        : ""}
    </div>
  );
};

export default Upcomingbar;
