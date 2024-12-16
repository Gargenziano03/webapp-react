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
                        <inprt name="username" type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.username)} />
                    </form>
                </div>
            </div>
        </div>
    )
}