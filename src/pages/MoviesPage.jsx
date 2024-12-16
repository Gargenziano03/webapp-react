// Importa i componenti necessari
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function MoviesPage() {
    // URL dell'API
    const base_movies_api_url = 'http://localhost:3000/api/movies '

    const [movies, setMovies] = useState([])
    // useEffect per caricare i dati dei film
    useEffect(() => {
        // Effettua una richiesta HTTP GET per ottenere i dati dei film
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovies(data.movies)
                console.log(movies);


            }).catch(err => console.error(err))
    }, [])
    /*const movies = [

        {
            "id": 1,
            "title": "Inception",
            "director": "Christopher Nolan",
            "genre": "Science Fiction",
            "year": 2010,
            "description": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
            "created_at": "2024-11-29 11:40:13",
            "updated_at": "2024-11-29 11:40:13"
        },
        {
            "id": 2,
            "title": "The Godfather",
            "director": "Francis Ford Coppola",
            "genre": "Crime",
            "year": 1972,
            "description": "The story of a powerful Italian-American crime family and their struggles.",
            "created_at": "2024-11-29 11:40:13",
            "updated_at": "2024-11-29 11:40:13"
        },
        {
            "id": 3,
            "title": "Titanic",
            "director": "James Cameron",
            "genre": "Romance",
            "year": 1997,
            "description": "A romantic story set against the tragic sinking of the RMS Titanic.",
            "created_at": "2024-11-29 11:40:13",
            "updated_at": "2024-11-29 11:40:13"
        },
        {
            "id": 4,
            "title": "The Matrix",
            "director": "The Wachowskis",
            "genre": "Action",
            "year": 1999,
            "description": "A hacker discovers the truth about his reality and his role in the war against its controllers.",
            "created_at": "2024-11-29 11:40:13",
            "updated_at": "2024-11-29 11:40:13"
        },
        {
            "id": 5,
            "title": "Interstellar",
            "director": "Christopher Nolan",
            "genre": "Science Fiction",
            "year": 2014,
            "description": "A team of explorers travels through a wormhole in space to save humanity.",
            "created_at": "2024-11-29 11:40:13",
            "updated_at": "2024-11-29 11:40:13"
        }
    ]*/



    return (
        <>
            <Banner title="movie" subtitle="common films" />

            <section className="py-5">

                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                        }
                    </div>
                </div>

            </section>
        </>
    )
}