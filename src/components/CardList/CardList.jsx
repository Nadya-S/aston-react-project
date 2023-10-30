import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MoreButton from "../MoreButton/MoreButton";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import UpdateFavorites from "../../supabase/UpdateFavorites";
import { memo, useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import MyLocalStorage from "../../utils/MyLocalStorage";
import Poster from "../Poster/Poster";

const CardList = memo(function ({ movies }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const user = useSelector((state) => state.user);
  const history = useSelector((state) => state.history);

  console.log("history", history, movies);

  useEffect(() => {
    MyLocalStorage.setItem(`history`, history);
    console.log("LS");
  }, [history]);

  useEffect(() => {
    console.log("CHECK FAVORITES");
    const checkFavorites = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        let { data: favorites, error } = await supabase
          .from("favorites")
          .select("*")
          .eq("user_id", user.id);

        setFavoriteMovies(favorites);
      }
    };
    checkFavorites();
  }, []);

  const updateIconButtonSx = (movieId) => {
    return favoriteMovies.some((favorite) => favorite.movie === movieId);
  };

  const handleUpdateFavorites = async (movieId) => {
    console.log("UPDATE FAVORITE");
    const favorite = favoriteMovies.find(
      (favorite) => favorite.movie === movieId
    );

    if (favorite) {
      UpdateFavorites(movieId, favorite.id, favoriteMovies, setFavoriteMovies);
    } else {
      UpdateFavorites(movieId, null, favoriteMovies, setFavoriteMovies);
    }

    const { data: favorites, error } = await supabase
      .from("favorites")
      .select("user_id, movie");

    if (favorites) {
      setFavoriteMovies(favorites);
    }
  };

  if (movies.length > 0) {
    return (
      <ImageList cols={4} sx={{ width: "90vw", maxWidth: 1280 }}>
        {movies.map((item) => (
          <ImageListItem key={item.id} sx={{ width: "22vw", maxWidth: 308 }}>
            {item.poster ? (
              <img
                srcSet={`${item.poster?.previewUrl}`}
                src={`${item.poster?.previewUrl}`}
                alt={item.name}
                loading="lazy"
              />
            ) : (
              <Poster title={item.name} />
            )}

            <MoreButton id={item.id} />
            <ImageListItemBar
              title={
                <span>
                  {item.name} ({item.year})
                </span>
              }
              subtitle={<span>Жанр: {item.genres[0]?.name}</span>}
              position="below"
              actionIcon={
                user && (
                  <IconButton
                    sx={
                      updateIconButtonSx(item.id)
                        ? { color: "#db7e3b" }
                        : { color: "#000000" }
                    }
                    aria-label={`star ${item.title}`}
                    onClick={() => handleUpdateFavorites(item.id, item.supaId)}
                  >
                    <StarIcon />
                  </IconButton>
                )
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    return (
      <div>
        <CircularProgress sx={{ color: "#db7e3b" }} />
      </div>
    );
  }
});

export default CardList;
