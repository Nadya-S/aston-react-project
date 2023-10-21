import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentMovie } from "../../store/actions";

const Movie = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.currentMovie);
  const { id } = useParams();
  console.log("MOVIE", movie);

  useEffect(() => {
    console.log("GET CURRENT MOVIE");
    getCurrentMovie(id, dispatch);
  }, [id, dispatch]);

  return <section>{movie && <Card card={movie} />}</section>;
};

export default Movie;
