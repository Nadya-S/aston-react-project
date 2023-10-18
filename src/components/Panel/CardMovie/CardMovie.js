import './CardMovie.css'

export const CardMovie = (props) => {

    const movie = props.movie

    return (
        <div className="conteiner_card">
            <img src={movie.poster.previewUrl} alt="#" width={250} />
            <h2>{movie.name}</h2>
            <h2>КП: {movie.rating.kp}. imdb: {props.movie.rating.imdb}</h2>
            <h2>{movie.shortDescription}</h2>
        </div>
    )
}