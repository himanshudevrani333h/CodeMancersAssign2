import "./pbar.css";
import { UpcomingCreate } from "./redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";

const Upcomingbar = () => {
  const state = useSelector((state) => state);
  const [upcomingState, setUpcoming] = useState([]);
  const dispatch = useDispatch();
  state.then((data) => {
    setUpcoming(data.uState);
  });

  useEffect(() => {
    dispatch(UpcomingCreate());
  }, []);

  return (
    <div className="ubcontainer">
      {upcomingState.length > 0
        ? upcomingState.map((el) => {
            return <Cards data={el} st={"uState"}/>;
          })
        : ""}
    </div>
  );
};

export default Upcomingbar;
