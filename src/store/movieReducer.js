const defaultState = {
  movies: [],
  searchMovies: [],
  favoriteMovies: [],
  dataSupabase: [],
  currentMovie: null,
  loggedIn: false,
  user: "",
  isLoading: false,
  error: false,
  currentPage: 1,
  fetching: true,
};

const GET_MOVIES = "GET_MOVIES";
const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
const GET_CURRENT_MOVIE = "GET_CURRENT_MOVIE";
const SET_FAVORITE_MOVIES = "SET_FAVORITE_MOVIES";
const SET_DATA_SUPABASE = "SET_DATA_SUPABASE";
const SET_LOGGED_IN = "LOGGED_IN";
const SET_USER = "SET_USER";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";
const SET_FETCHING = "SET_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_SEARCH_MOVIES:
      return { ...state, searchMovies: action.payload };
    case GET_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    case SET_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    case SET_DATA_SUPABASE:
      return { ...state, dataSupabase: action.payload };
    case SET_LOGGED_IN:
      return { ...state, loggedIn: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_FETCHING:
      return { ...state, fetching: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export const getMoviesAction = (payload) => ({ type: GET_MOVIES, payload });
export const getSearchMoviesAction = (payload) => ({
  type: GET_SEARCH_MOVIES,
  payload
});
export const getCurrentMovieAction = (payload) => ({
  type: GET_CURRENT_MOVIE,
  payload,
});
export const setDataSupabaseAction = (payload) => ({
  type: SET_DATA_SUPABASE,
  payload,
});
export const setFavoriteMoviesAction = (payload) => ({
  type: SET_FAVORITE_MOVIES,
  payload,
});
export const setLoggedInAction = (payload) => ({
  type: SET_LOGGED_IN,
  payload,
});
export const setUser = (payload) => ({ type: SET_USER, payload });
export const setIsLoadingAction = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setFetchingAction = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const setCurrentPageAction = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});