import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MoreButton from "../MoreButton/MoreButton";
import StarIcon from '@mui/icons-material/Star';
import IconButton from "@mui/material/IconButton";
import UpdateFavorites from "../../supabase/UpdateFavorites";
import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";
import { CircularProgress } from "@mui/material";

const CardList = ({ movies }) => {

  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    const checkFavorites = async () => {
      let { data: favorites, error } = await supabase
        .from('favorites')
        .select('*')

      setFavoriteMovies(favorites)
    }
    checkFavorites()
  }, [])

  const updateIconButtonSx = (movieId) => {
    return favoriteMovies.some((favorite) => favorite.movie === movieId)
  }

  const handleUpdateFavorites = async (movieId) => {
    const favorite = favoriteMovies.find((favorite) => favorite.movie === movieId)

    if (favorite) {
      UpdateFavorites(movieId, favorite.id, favoriteMovies, setFavoriteMovies);
    } else {
      UpdateFavorites(movieId, null, favoriteMovies, setFavoriteMovies);
    }

    const { data: favorites, error } = await supabase
      .from('favorites')
      .select('user_id, movie')

    if (favorites) {
      setFavoriteMovies(favorites)
    }
  }

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
                  sx={updateIconButtonSx(item.id) ? { color: '#db7e3b' } : { color: '#000000' }}
                  aria-label={`star ${item.title}`}
                  onClick={() => handleUpdateFavorites(item.id, item.supaId)}
                >
                  <StarIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    return <div>
      <CircularProgress sx={{ color: '#db7e3b' }} />
    </div>;
  }
};

export default CardList;