import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./page/Main/Main";
import { Login } from "./page/Login/Login";
import Registration from "./page/Registration/Registration";
import FavoriteMovies from "./page/FavoriteMovies/FavoriteMovies";
import History from "./page/History/History";
import { routes } from "./utils/routes";
import Movie from "./page/Movie/Movie";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import AuthButtons from "./components/AuthButtons/AuthButtons";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Header>{user ? <Navigation user={user} /> : <AuthButtons />}</Header>
      <Routes>
        <Route exact path={routes.MAIN_PAGE} element={<Main />} />
        <Route path={routes.MOVIE_PAGE} element={<Movie />} />
        <Route path={routes.LOGIN_PAGE} element={<Login />} />
        <Route path={routes.REGISTRATION_PAGE} element={<Registration />} />
        <Route
          path={routes.FAVORITE_MOVIES_PAGE}
          element={<FavoriteMovies />}
        />
        <Route path={routes.HISTORY_PAGE} element={<History />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
export default App;
