import "./HistoryList.css";
import HistoryItem from "../HistoryItem/HistoryItem";

const HistoryList = ({ handleSearchState }) => {
  // сделать отрисовку через map
  return (
    <ul className="history-list">
      <li>
        <HistoryItem handleSearchState={handleSearchState} />
      </li>
      <li>
        <HistoryItem />
      </li>
      <li>
        <HistoryItem />
      </li>
    </ul>
  );
};

export default HistoryList;
