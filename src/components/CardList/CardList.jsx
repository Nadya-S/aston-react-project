import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreButton from "../MoreButton/MoreButton";

const CardList = ({ movies }) => {
  if (movies.length > 0) {
    return (
      <ImageList cols={4} sx={{ width: "90vw", maxWidth: 1280 }}>
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
