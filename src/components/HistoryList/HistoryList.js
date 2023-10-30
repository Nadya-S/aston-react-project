import "./HistoryList.css";
import HistoryItem from "../HistoryItem/HistoryItem";
import { useId } from "react";

const HistoryList = ({ history, handleSearchState }) => {
  const id = useId();
  return (
    <ul className="history-list">
      {history.map((item, index) => (
        <HistoryItem
          key={`${id} - ${index}`}
          itemData={item}
          handleSearchState={handleSearchState}
        />
      ))}
    </ul>
  );
};

export default HistoryList;
