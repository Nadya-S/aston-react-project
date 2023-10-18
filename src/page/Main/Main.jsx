import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { fetchKinopoisk } from "../../api/api";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchKinopoisk()
      .then((data) => {
        console.log(data);
        setMovies(data.docs);
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });

    console.log(movies);
  }, []);

  return (
    <section>
      <CardList movies={movies} />
    </section>
  );
};

export default Main;
