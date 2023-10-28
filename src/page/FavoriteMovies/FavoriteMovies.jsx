import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import UpdateFavorites from "../../supabase/UpdateFavorites";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSupabase, fetchFavoriteMovies } from "../../store/actions";
const MemoizedCardList = React.memo(CardList);


const FavoriteMovies = () => {

  const dataSupabase = useSelector(state => state.dataSupabase)
  const favoriteMovies = useSelector(state => state.favoriteMovies)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if(user) {
      dispatch(fetchDataSupabase())
    }
  }, [])

  useEffect(() => {
    dispatch(fetchFavoriteMovies(dataSupabase))
  }, [dataSupabase])

  const handleUpdateFavorites = async(movieId, supaId) => {
    await UpdateFavorites(movieId, supaId, favoriteMovies)
  }

  return (
    <section>
      <h1>Избранное</h1>
      {
        favoriteMovies.length > 0
          ? <MemoizedCardList movies={favoriteMovies} onUpdateFavorites={handleUpdateFavorites} />
          : <div>Список пуст</div>
      }
    </section>
  );
};

export default FavoriteMovies;