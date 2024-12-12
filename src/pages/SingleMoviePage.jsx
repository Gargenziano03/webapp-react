import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
useParams
export default function SingleMoviePage() {
    const { id } = useParams()

    const reviews = [
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
    ]

    return (
        <>
            <Banner title="movie" subtitle="common films" />

            <section className="reviews">
                <div className="container">
                    {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
                </div>
            </section>
        </>

    )
}