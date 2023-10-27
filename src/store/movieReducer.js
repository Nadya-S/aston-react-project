import MyLocalStorage from "../utils/MyLocalStorage";

const defaultState = {
  movies: [],
  currentMovie: null,
  user: MyLocalStorage.getItem("user"),
  history: MyLocalStorage.getItem("history") || [],
  isLoading: false,
  error: false,
};

const GET_MOVIES = "GET_MOVIES";
const GET_CURRENT_MOVIE = "GET_CURRENT_MOVIE";
const SET_USER = "SET_USER";
const SET_HISTORY = "SET_HISTORY";
const CLEAR_HISTORY = "CLEAR_HISTORY";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";

export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case CLEAR_HISTORY:
      return { ...state, history: [] };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const getMoviesAction = (payload) => ({ type: GET_MOVIES, payload });
export const getCurrentMovieAction = (payload) => ({
  type: GET_CURRENT_MOVIE,
  payload,
});
export const setUserAction = (payload) => ({ type: SET_USER, payload });
export const setHistoryAction = (payload) => ({ type: SET_HISTORY, payload });
export const clearHistoryAction = () => ({ type: CLEAR_HISTORY });
export const setIsLoadingAction = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});
export const setErrorAction = (payload) => ({ type: SET_ERROR, payload });
