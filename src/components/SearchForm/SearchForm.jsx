import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchSearchKinopoisk } from "../../api/api";
import { useDebounce } from "../../hooks/debounce";

const SearchForm = () => {
  
  const [search, setSearch] = useState('')
  const debounce = useDebounce(search)

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if(search) {
      fetchSearchKinopoisk(search)
      
    }
  }, [])

  return (
    <>
      <TextField id="outlined-basic" label="Поиск" variant="outlined" onChange={handleChangeInput}/>
    </>
  )
};

export default SearchForm;
