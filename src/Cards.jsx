import "./cards.css";
import EllipsisText from "react-ellipsis-text";
import { useHistory } from "react-router";

const Cards = (props) => {
  const history = useHistory();
  return (
    <div
      className="card"
      onClick={() => {
          let a = document.querySelectorAll(".nav-link")
          a[0].classList.remove("active")
        history.push({
          // params are send to the /preview path 
          // First is data ID and Second is the name of arr which is stored in defaultState from reducer  
          pathname: `/preview/${props.data.id}/${props.st}`,
          data: props.data,
        });
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <p className="card-text">
        <EllipsisText text={props.data.overview} length={75} />
      </p>
    </div>
  );
};

export default Cards;
