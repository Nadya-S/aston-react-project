import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchSearchKinopoisk } from "../../api/api";
import { useDebounce } from "../../hooks/debounce";

const SearchForm = () => {
  
  const [searchInput, setSearchInput] = useState('')
  const debounce = useDebounce(searchInput)

  const handleChangeInput = (event) => {
    setSearchInput(event.target.value)
  }

  // useEffect(() => {
  //   if(debounce.length >= 3) {
  //     fetchSearchKinopoisk(debounce)
  //     .then((data) => {
  //       setMovies(data.docs);
  //     })
  //   }
  // }, [debounce])

  return (
    <>
      <TextField id="outlined-basic" label="Поиск" variant="outlined" onChange={handleChangeInput}/>
    </>
  )
};

export default SearchForm;