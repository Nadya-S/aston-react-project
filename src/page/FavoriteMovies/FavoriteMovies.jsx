import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import supabase from "../../supabaseClient";
import { getFavorites } from "../../api/api";


const FavoriteMovies = () => {

  const [dataSupabase, setDataSupabase] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    const getDataSupabases = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      const { data: favorite, error } = await supabase
        .from('favorites')
        .select('movie')
        .eq('user_id', user.id)

      setDataSupabase(favorite)
      console.log(user)
    }
    getDataSupabases()
  }, [])

  useEffect(() =>{
    if(dataSupabase.length > 0) {
      const promises = dataSupabase.map((item) => {
        const movieId = item.movie
        return getFavorites(String(movieId))
      })

      Promise.all(promises)
      .then((results) => {
        const movies = results.flatMap((data) => data.docs)
        setFavoriteMovies(movies)
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      })
    }
  }, [dataSupabase])

  return (
    <section>
      <h2>hello</h2>
      {
        favoriteMovies.length > 0 ? <CardList movies={favoriteMovies}/>
        : null
      }
    </section>
  );
};

export default FavoriteMovies;


// if (dataSupabase) {
//   for (var i = 0; i < dataSupabase.length; i++) {
//     var movieId = dataSupabase[i].movie;
//     getFavorites(String(movieId))
//       .then((data) => {
//         console.log('1331',data)
//         favoriteMovies.push(...data.docs)
//       })
//       .catch((error) => {
//         console.error("Произошла ошибка:", error);
//       });
//   }
// }