import supabase from './supabaseClient'


const UpdateFavorites = async ( movieId, supaId, favoriteMovies, setFavoriteMovies) => {
    const { data: { user } } = await supabase.auth.getUser()

    const isFavorite = favoriteMovies.some((favorite) => favorite.movie === movieId)

    if (isFavorite) {
        const { data, error } = await supabase
            .from('favorites')
            .delete()
            .eq('id', supaId)

            console.log('delete')
            const updatedFavorites = favoriteMovies.filter((favorite) => favorite.id !== supaId)
            setFavoriteMovies(updatedFavorites)
        
    } else {
        const { data, error } = await supabase
            .from('favorites')
            .insert([{
                user_id: user.id,
                movie: movieId,
            }])
            .select()

            console.log('added')
        if (data) {
            const updatedFavorites = [...favoriteMovies, { user_id: user.id, movie: movieId }]
            setFavoriteMovies(updatedFavorites)
        }
    }
}

export default UpdateFavorites;