import "./History.css";
import HistoryList from "../../components/HistoryList/HistoryList";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.history);

  const handleSearchState = () => {
    console.log("handleSearchStat");
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
