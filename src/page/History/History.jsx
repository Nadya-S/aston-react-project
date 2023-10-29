import "./History.css";
import HistoryList from "../../components/HistoryList/HistoryList";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValueAction } from "../../store/movieReducer";
import { useNavigate } from "react-router-dom";

const History = () => {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchState = (searchValue) => {
    console.log("handleSearchStat");
    dispatch(setSearchValueAction(searchValue));
    navigate("/");
    //написать функцию, которая будет делать запрос с параметрами из текущего айтема и редиректить на мэйн
  };

  return (
    <section className="history">
      <h3 className="history__title">История поиска:</h3>
      {/* добавить отрисовку по условию */}
      <HistoryList handleSearchState={handleSearchState} history={history} />
    </section>
  );
};

export default History;
