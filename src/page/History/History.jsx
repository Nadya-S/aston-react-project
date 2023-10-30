import "./History.css";
import HistoryList from "../../components/HistoryList/HistoryList";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchMoviesAction,
  setSearchValueAction,
} from "../../store/movieReducer";
import { useNavigate } from "react-router-dom";

const History = () => {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchState = (searchValue, searchData) => {
    console.log("handleSearchStat");
    dispatch(setSearchValueAction(searchValue));
    dispatch(getSearchMoviesAction(searchData));
    navigate("/");
    //написать функцию, которая будет делать запрос с параметрами из текущего айтема и редиректить на мэйн
  };

  return (
    <section className="history">
      <h3 className="history__title">История поиска:</h3>
      {/* добавить отрисовку по условию */}
      {history.length > 0 ? (
        <HistoryList handleSearchState={handleSearchState} history={history} />
      ) : (
        <div>Здесь пока пусто</div>
      )}
    </section>
  );
};

export default History;
