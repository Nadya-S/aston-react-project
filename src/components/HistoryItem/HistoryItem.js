import Poster from "../Poster/Poster";
import "./HistoryItem.css";
import { ImageList, ImageListItem, Paper } from "@mui/material";

const HistoryItem = ({ itemData, handleSearchState }) => {
  console.log(itemData);
  const handleClick = () => {
    handleSearchState(itemData[0], itemData[1]);
  };

  return (
    <div className="history-item">
      <Paper elevation={3} onClick={handleClick}>
        <p className="history-item__search-data">
          Параметры поиска: {itemData[0]}
        </p>
        <ImageList sx={{ height: "100%" }} cols={7}>
          {itemData[1].slice(0, 7).map(
            // отображаем только первые 7 фильмов
            (item) => (
              <ImageListItem key={item.id}>
                {item.poster ? (
                  <img
                    srcSet={`${item.poster?.previewUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.poster?.previewUrl}?w=161&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                  />
                ) : (
                  <Poster title={item.name} />
                )}
              </ImageListItem>
            )
          )}
        </ImageList>
      </Paper>
    </div>
  );
};

export default HistoryItem;
