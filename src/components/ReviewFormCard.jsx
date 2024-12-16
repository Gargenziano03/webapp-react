import { useState } from "react"
export default function ReviewFormCard() {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
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