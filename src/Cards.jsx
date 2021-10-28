import "./cards.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <Link
    to={`/preview/${props.data.id}`}
      className="card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <p className="card-text">
         {props.data.overview}
      </p>
    </Link>
  );
};

export default Cards;
