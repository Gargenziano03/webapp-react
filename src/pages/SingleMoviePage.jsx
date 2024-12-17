import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import ReviewFormCard from "../components/ReviewFormCard";
useParams
export default function SingleMoviePage() {
    // Recupera il parametro 'id' dalla URL tramite useParams
    const { id } = useParams()

    // Costruisce l'URL dell'API per ottenere i dettagli del film specifico
    const base_movie_api_url = `http://localhost:3000/api/movies/${id}`

    const [movie, setMovie] = useState(null)
    const [success, setSuccess] = useState(null)

    // useEffect per caricare i dettagli del film 
    useEffect(() => {
        fetch(base_movie_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovie(data)
                console.log(movie);


            }).catch(err => console.error(err))
    }, [success])
    /* const reviews = [
         {
             id: 1,
             name: 'Alice',
             vote: 5,
             text: 'A mind-bending masterpiece.',
             created_at: '2024-11-29 11:40:13',
             updated_at: '2024-11-29 11:40:13'
         },
         {
             id: 2,
             name: 'Bob',
             vote: 4,
             text: 'Great visuals and a compelling story.',
             created_at: '2024-11-29 11:40:13',
             updated_at: '2024-11-29 11:40:13'
         },
         {
             id: 3,
             name: 'Charlie',
             vote: 3,
             text: 'Confusing at times, but worth watching.',
             created_at: '2024-11-29 11:40:13',
             updated_at: '2024-11-29 11:40:13'
         },
 ]*/

    return (
        <>
            <Banner title={movie?.title} subtitle={movie?.director} />

            <section className="reviews">
                <div className="container">
                    {movie && movie?.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}

                    <ReviewFormCard movie_id={id} success={success} handleSuccess={setSuccess} />
                </div>
            </section>
        </>

    )
}