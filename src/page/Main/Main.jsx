import React, { useEffect, useState, useCallback } from "react";
import CardList from "../../components/CardList/CardList";
import { fetchKinopoisk } from "../../api/api";
import SearchForm from "../../components/SearchForm/SearchForm";

const MemoizedCardList = React.memo(CardList);

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  

  const handleMoviesChange = useCallback((newMovies) => {
    setMovies(newMovies)
  }, [movies])

  const scrollHandler = useCallback((event) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }, [])

  useEffect(() => {
    if (fetching) {
      fetchKinopoisk(currentPage)
        .then((data) => {
          setMovies((prevMovies) => [...prevMovies, ...data.docs]);
          setCurrentPage((prevState) => prevState + 1)
        })
        .finally(() => setFetching(false))
        .catch((error) => {
          console.error("Произошла ошибка:", error);
        });
    }
  }, [fetching, currentPage])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <section>
      <SearchForm onMoviesChange={handleMoviesChange}/>
      <MemoizedCardList movies={movies} />
    </section>
  );
};

export default Main;