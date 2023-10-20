import { useEffect, useState } from "react";
import { getOneCard } from "../../api/api";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getOneCard(id)
      .then((res) => {
        console.log(res);
        setMovie(res);
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  }, []);

  return (
    <section>
      <Card card={movie} />
    </section>
  );
};

export default Movie;
