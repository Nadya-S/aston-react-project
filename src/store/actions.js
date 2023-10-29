import {
  fetchKinopoisk,
  fetchSearchKinopoisk,
  getFavorites,
  getOneCard,
} from "../api/api";
import supabase from "../supabase/supabaseClient";
import {
  getMoviesAction,
  getCurrentMovieAction,
  setCurrentPageAction,
  setFetchingAction,
  getSearchMoviesAction,
  setDataSupabaseAction,
  setFavoriteMoviesAction,
  setHistoryAction,
} from "./movieReducer";

export const fetchMovies = (currentPage) => {
  return (dispatch, getState) => {
    const { movies } = getState();

    dispatch(setFetchingAction(true));
    fetchKinopoisk(currentPage)
      .then((data) => {
        dispatch(getMoviesAction([...movies, ...data.docs]));
        dispatch(setCurrentPageAction(currentPage + 1));
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      })
      .finally(() => {
        dispatch(setFetchingAction(false));
      });
  };
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

export const getSearchMovies = (search, user) => {
  return (dispatch) => {
    fetchSearchKinopoisk(search)
      .then((data) => {
        console.log("ТУТ ПРИШЛИ ДАННЫЕ ПОИСКА", data);
        dispatch(getSearchMoviesAction(data.docs));
        if (data.docs.length > 0 && user) {
          dispatch(setHistoryAction([search, data.docs]));
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при поиске фильмов:", error);
      });
  };
};

export const fetchDataSupabase = () => async (dispatch) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: favorite, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", user.id);

  const favoriteWithId = favorite
    ? favorite.map((item) => ({
        ...item,
        supaId: item.id,
      }))
    : [];

  dispatch(setDataSupabaseAction(favoriteWithId));
};

export const fetchFavoriteMovies = (dataSupabase) => (dispatch) => {
  if (dataSupabase.length > 0) {
    const promises = dataSupabase.map((item) => {
      const movieId = item.movie;
      return getFavorites(String(movieId)).then((data) => ({
        ...item,
        favoritesData: data.docs,
      }));
    });

    Promise.all(promises)
      .then((results) => {
        const movies = results
          ? results.flatMap((item) => {
              const { favoritesData, ...rest } = item;
              return favoritesData.map((data) => ({
                ...rest,
                supaId: item.supaId,
                ...data,
              }));
            })
          : [];
        dispatch(setFavoriteMoviesAction(movies));
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  }
};
