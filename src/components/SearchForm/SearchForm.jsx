import { TextField } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { fetchSearchKinopoisk } from "../../api/api";
import { useDebounce } from "../../hooks/debounce";
import { setHistoryAction } from "../../store/movieReducer";
import { useDispatch, useSelector } from "react-redux";

const SearchForm = ({ onMoviesChange }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);

  const handleChangeInput = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    if (debounce) {
      fetchSearchKinopoisk(search)
        .then((data) => {
          onMoviesChange(data.docs);
          if (data.docs.length > 0 && user) {
            dispatch(setHistoryAction([search, data.docs]));
          }
        })
        .catch((error) => {
          console.error("Произошла ошибка при поиске фильмов:", error);
        });
    } else {
      onMoviesChange([]);
    }
  }, [debounce]);

  return (
    <>
      <TextField
        type="search"
        label="Поиск"
        variant="outlined"
        onChange={handleChangeInput}
        value={search}
        sx={{ width: "60vw", margin: 2 }}
      />
    </>
  );
};

export default SearchForm;
