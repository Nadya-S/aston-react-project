import "./HistoryList.css";
import HistoryItem from "../HistoryItem/HistoryItem";

const HistoryList = ({ history, handleSearchState }) => {
  return (
    <ul className="history-list">
      {history.map((item) => (
        <HistoryItem itemData={item} handleSearchState={handleSearchState} />
      ))}
    </ul>
  );
};

export default HistoryList;
