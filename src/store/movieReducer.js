import MyLocalStorage from "../utils/MyLocalStorage";

const defaultState = {
  movies: [],
  searchMovies: [],
  favoriteMovies: [],
  dataSupabase: [],
  currentMovie: null,
  user: MyLocalStorage.getItem("user"),
  history: MyLocalStorage.getItem("history") || [],
  currentPage: 1,
  fetching: true,
  searchValue: "",
};

const GET_MOVIES = "GET_MOVIES";
const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
const SET_FAVORITE_MOVIES = "SET_FAVORITE_MOVIES";
const SET_DATA_SUPABASE = "SET_DATA_SUPABASE";
const GET_CURRENT_MOVIE = "GET_CURRENT_MOVIE";
const SET_USER = "SET_USER";
const SET_HISTORY = "SET_HISTORY";
const CLEAR_HISTORY = "CLEAR_HISTORY";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCHING = "SET_FETCHING";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_SEARCH_MOVIES:
      return { ...state, searchMovies: action.payload };
    case SET_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    case SET_DATA_SUPABASE:
      return { ...state, dataSupabase: action.payload };
    case GET_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case CLEAR_HISTORY:
      return { ...state, history: [] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_FETCHING:
      return { ...state, fetching: action.payload };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export const getMoviesAction = (payload) => ({ type: GET_MOVIES, payload });
export const getSearchMoviesAction = (payload) => ({
  type: GET_SEARCH_MOVIES,
  payload,
});
export const setFavoriteMoviesAction = (payload) => ({
  type: SET_FAVORITE_MOVIES,
  payload,
});
export const setDataSupabaseAction = (payload) => ({
  type: SET_DATA_SUPABASE,
  payload,
});
export const getCurrentMovieAction = (payload) => ({
  type: GET_CURRENT_MOVIE,
  payload,
});
export const setUserAction = (payload) => ({ type: SET_USER, payload });
export const setHistoryAction = (payload) => ({ type: SET_HISTORY, payload });
export const clearHistoryAction = () => ({ type: CLEAR_HISTORY });
export const setFetchingAction = (payload) => ({
  type: SET_FETCHING,
  payload,
});
export const setCurrentPageAction = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});
export const setSearchValueAction = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});
