import "./HistoryItem.css";
import { ImageList, ImageListItem, Paper } from "@mui/material";

const HistoryItem = ({ itemData, handleSearchState }) => {
  console.log(itemData);
  return (
    <div className="history-item">
      <Paper onClick={handleSearchState}>
        <p className="history-item__search-data">
          Параметры поиска: {itemData[0]}
        </p>
        <ImageList sx={{ height: "100%" }} cols={7}>
          {itemData[1].slice(0, 7).map(
            // отображаем только первые 7 фильмов
            (item) => (
              <ImageListItem key={item.id}>
                <img
                  srcSet={`${item.poster?.previewUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.poster?.previewUrl}?w=161&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageListItem>
            )
          )}
        </ImageList>
      </Paper>
    </div>
  );
};

export default HistoryItem;
