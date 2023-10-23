import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MoreButton from "../MoreButton/MoreButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import AddMovie from "../AddMovie/AddMovie";

const CardList = ({ movies }) => {
  console.log("1234567", movies)
  if (movies.length > 0) {
    return (
      <ImageList cols={3}>
        {movies.map((item) => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.poster.previewUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.poster.previewUrl}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <MoreButton id={item.id} />
            <ImageListItemBar
              title={
                <span>
                  {item.name} ({item.year})
                </span>
              }
              subtitle={<span>Жанр: {item.genres[0].name}</span>}
              position="below"
              actionIcon={
                <IconButton
                  sx={{ color: "black" }}
                  aria-label={`star ${item.title}`}
                  onClick={() => AddMovie(item.id)}
                >
                  <StarBorderIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
};

export default CardList;