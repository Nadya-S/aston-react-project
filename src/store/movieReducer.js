const defaultState = {
  movies: [],
  currentMovie: null,
  loggedIn: false,
  isLoading: false,
  error: false,
};

const GET_MOVIES = "GET_MOVIES";
const GET_CURRENT_MOVIE = "GET_CURRENT_MOVIE";
const SET_LOGGED_IN = "LOGGED_IN";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";

export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    case SET_LOGGED_IN:
      return { ...state, loggedIn: action.payload };
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
export const setLoggedInAction = (payload) => ({
  type: SET_LOGGED_IN,
  payload,
});
export const setIsLoadingAction = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});
export const setError = (payload) => ({ type: SET_ERROR, payload });
