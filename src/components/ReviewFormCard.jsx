import { useState } from "react"
export default function textFormCard({ movie_id }) {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)

    function HandleFormSubmit(e) {
        e.preventDefault()

        if (name.length < 2 || text.length < 5 || rating == 0) {
            setErrorMessage('Please fill all fileds in the form')

        } else {
            setErrorMessage(null)
            const formData = {
                name,
                text,
                vote: rating
            }
            console.log(formData);


            const base_movie_api_url = `http://localhost:3000/api/movies/${movie_id}/review`
            fetch(base_movie_api_url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log(err

                ));
        }
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <input name="name" type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <textarea name="text" id="text" className="form-control" placeholder="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">invio</button>
                            {errorMessage && <span className="text-danger"> <i className="bi bi-x"></i> {errorMessage}</span>}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}