import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { fetchKinopoisk, fetchSearchKinopoisk } from "../../api/api";
// import SearchForm from "../../components/SearchForm/SearchForm";
import { TextField } from "@mui/material";
import { useDebounce } from "../../hooks/debounce"
import Registration from "../Registration/Registration";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const debounce = useDebounce(search)


  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  // useEffect(() => {
  //   if(debounce.length >= 3) {
  //     fetchSearchKinopoisk(debounce)
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.docs);
  //     })
  //     console.log(debounce)
  //   } else {
  //     fetchKinopoisk()
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.docs);
  //     })
  //     .catch((error) => {
  //       console.error("Произошла ошибка:", error);
  //     });
  //   }
  // },[debounce])

  return (
    <section>
      <TextField type="text" label="Поиск" variant="outlined" onChange={handleChangeInput} />
      {/* <SearchForm /> */}
      <CardList movies={movies} />

      <Registration />
    </section>
  );
};

export default Main;
