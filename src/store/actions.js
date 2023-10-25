import { fetchKinopoisk, getOneCard } from "../api/api";
import { getMoviesAction, getCurrentMovieAction } from "./movieReducer";

export const getMovies = (dispatch) => {
  fetchKinopoisk()
    .then((res) => {
      console.log(res);
      dispatch(getMoviesAction([...res.docs]));
    })
    .catch((err) => {
      console.error("Произошла ошибка:", err);
    });
};

export const getCurrentMovie = (id, dispatch) => {
  getOneCard(id)
    .then((currentMovie) => {
      console.log(currentMovie);
      dispatch(getCurrentMovieAction(currentMovie));
    })
    .catch((err) => {
      console.error("Произошла ошибка:", err);
    });
};
