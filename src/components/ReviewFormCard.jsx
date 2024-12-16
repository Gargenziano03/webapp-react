import { useState } from "react"
import { SplitVendorChunkCache } from "vite"
export default function ReviewFormCard() {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)


    function HandleFormSubmit(e) {
        e.preventDefault()

        const formData = {
            username,
            review,
            vote: rating
        }
        console.log(formData);


        const base_movie_api_url = `http://localhost:3000/api/movies/${movie_id}/review`
        console.log(base_movie_api_url);

    }
    function HandleFormSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <input name="username" type="text" className="form-control" placeholder="username" value={username} onChange={(e) => setUsername(e.target.username)} />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <textarea name="review" id="review" className="form-control" placeholder="review" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">invio</button>
                    </form>
                </div>
            </div>
        </div>
    )
}