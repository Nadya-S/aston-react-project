import { useEffect, useState } from "react"
import { fetchKinopoisk } from "../../api/api"
import { CardMovie } from "./CardMovie/CardMovie"
import './Panel.css'


export const Panel = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchKinopoisk()
            .then(data => {
                console.log(data)
                setMovies(data.docs)
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });

            console.log(movies)
    }, [])

    return (
        <div className="conteiner_panel">
            {movies
                ?
                movies.map(movie =>
                    <CardMovie key={movie.id} movie={movie} />)
                : 
                null
            }
        </div>
    )
}