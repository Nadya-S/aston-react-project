import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import supabase from "../../supabase/supabaseClient";
import { getFavorites } from "../../api/api";
import UpdateFavorites from "../../supabase/UpdateFavorites";


const FavoriteMovies = () => {

  const [dataSupabase, setDataSupabase] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    const getDataSupabases = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      const { data: favorite, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', user.id)

      const favoriteWithId = favorite.map((item) => ({
        ...item,
        supaId: item.id
      }))

      setDataSupabase(favoriteWithId)
    }
    getDataSupabases()
  }, [])

  useEffect(() => {
    if (dataSupabase.length > 0) {
      const promises = dataSupabase.map((item) => {
        const movieId = item.movie
        return getFavorites(String(movieId))
          .then((data) => ({
            ...item,
            favoritesData: data.docs
          }))
      })

      Promise.all(promises)
        .then((results) => {
          const movies = results.flatMap((item) => {
            const { favoritesData, ...rest } = item;
            return favoritesData.map((data) => ({
              ...rest,
              supaId: item.supaId,
              ...data
            }))
          })
          setFavoriteMovies(movies)
        })
        .catch((error) => {
          console.error("Произошла ошибка:", error);
        })
    }
  }, [dataSupabase])

  const handleUpdateFavorites = async(movieId, supaId) => {
    await UpdateFavorites(movieId, supaId, favoriteMovies, setFavoriteMovies)
  }

  return (
    <section>
      <h1>Избранное</h1>
      {
        favoriteMovies.length > 0
          ? <CardList movies={favoriteMovies} onUpdateFavorites={handleUpdateFavorites} />
          : <div>Список пуст</div>
      }
    </section>
  );
};

export default FavoriteMovies;
