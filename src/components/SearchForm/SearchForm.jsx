import { TextField } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "../../hooks/debounce";
import { getSearchMovies } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMoviesAction } from "../../store/movieReducer";

const SearchForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);

  const handleChangeInput = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    if (debounce.length > 0) {
      dispatch(getSearchMovies(debounce, user));
    } else if (debounce.length === 0) {
      dispatch(getSearchMoviesAction([])); //убрала запрос к апи, так как карточки итак отрисовываются
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
