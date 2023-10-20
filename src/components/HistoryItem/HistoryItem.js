import "./HistoryItem.css";
import { ImageList, ImageListItem, Paper } from "@mui/material";

const HistoryItem = ({ handleSearchState }) => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
  ];

  return (
    <div className="history-item">
      <Paper onClick={handleSearchState}>
        <p className="history-item__search-data">
          Параметры поиска: фильтры, содержание инпута
        </p>
        <ImageList sx={{ height: "100%" }} cols={7}>
          {itemData.slice(0, 7).map(
            // отображаем только первые 7 фильмов
            (item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
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
