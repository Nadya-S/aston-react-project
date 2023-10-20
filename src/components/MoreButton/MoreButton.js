import "./MoreButton.css";
import { Link } from "react-router-dom";

const MoreButton = ({ id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <button className="more-button">Подробнее</button>
    </Link>
  );
};

export default MoreButton;
