import React, { useEffect, useState, useCallback } from "react";
import CardList from "../../components/CardList/CardList";
import { fetchKinopoisk, fetchSearchKinopoisk } from "../../api/api";
import { TextField, CircularProgress } from "@mui/material";
import { useDebounce } from "../../hooks/debounce";

const MemoizedCardList = React.memo(CardList);

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const debounce = useDebounce(search)

  const handleChangeInput = useCallback((event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }, [])

  const scrollHandler = useCallback((event) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }, [])

  useEffect(() => {
    if (fetching) {
      fetchKinopoisk(currentPage)
        .then((data) => {
          console.log(data)
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
    if (debounce) {
      fetchSearchKinopoisk(search)
        .then((data) => {
          setMovies((prevMovies) => {
            if (search === '') {
              console.log('prevMovies', prevMovies);
              return prevMovies         //TODO
            } else {
              return data.docs
            }
          });
        })
        .catch((error) => {
          console.error("Произошла ошибка при поиске фильмов:", error);
        });
    } else {
      setMovies([])
    }
  }, [debounce])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <section>
      <TextField type="text" label="Поиск" variant="outlined" onChange={handleChangeInput} value={search} />
      {search && search.length >= 3 && movies.length === 0 && <p>Ничего не найдено</p>}
      {fetching && <CircularProgress />}
      <MemoizedCardList movies={movies} />
    </section>
  );
};

export default Main;