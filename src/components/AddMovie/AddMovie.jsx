import supabase from '../../supabaseClient'

const AddMovie = async (movie) => {
    console.log(movie)
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
        .from('favorites')
        .insert([
            {
                user_id: user.id,
                movie: movie
            }
        ])
        .select()
        console.log(user)
};

export default AddMovie;