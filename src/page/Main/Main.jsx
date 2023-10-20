import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { fetchKinopoisk, fetchSearchKinopoisk } from "../../api/api";
// import SearchForm from "../../components/SearchForm/SearchForm";
import { TextField } from "@mui/material";
import { useDebounce } from "../../hooks/debounce"


const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const debounce = useDebounce(search)


  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const scrollHandler = (event) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight)< 100) {
      setFetching(true)
    }
  }

  useEffect(() => {
    if (debounce.length >= 3) {
      fetchSearchKinopoisk(debounce)
        .then((data) => {
          setMovies(data.docs);
        })
    } if (fetching) {
      fetchKinopoisk(currentPage)
        .then((data) => {
          console.log(data)
          setMovies([...movies, ...data.docs]);
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
        .catch((error) => {
          console.error("Произошла ошибка:", error);
        });
    }
  }, [currentPage, debounce, fetching, movies])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <section>
      <TextField type="text" label="Поиск" variant="outlined" onChange={handleChangeInput} />
      {/* <SearchForm /> Пока не придумал, как вывести всю логику в отдельный компонент */} 
      <CardList movies={movies} />
    </section>
  );
};

export default Main;
