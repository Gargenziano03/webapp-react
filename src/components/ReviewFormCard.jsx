import { useState } from "react"
export default function textFormCard({ movie_id }) {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [success, setSuccess] = useState(null)

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }

    // Funzione che viene chiamata quando il form viene inviato
    function HandleFormSubmit(e) {
        e.preventDefault()

        // Validazione dei dati: controlla che nome, testo e voto siano validi
        if (name.length < 5 || text.length < 5 || rating == 0) {
            setErrorMessage('Please fill all fileds in the form')

        } else {
            setErrorMessage(null)
            const formData = {
                name,
                text,
                vote: rating
            }
            console.log(formData);

            // URL dell'API
            const base_movie_api_url = `http://localhost:3000/api/movies/${movie_id}/review`
            // Invia i dati al server tramite una richiesta POST
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
                    if (data.success) {
                        setSuccess(true)

                        setName('')
                        setText('')
                        setRating(0)
                        setErrorMessage(null)
                    }
                })
                .catch(err => console.log(err

                ));
        }


    }

    return (
        <div className="container">

            {success && <div>{success}</div>}
            <button onClick={HandleFormToggle} className="btn btn-dark mb-2" >Write a review</button>

            <div id="form-card" className="card  mb-4 d-none">
                <div className="card-body">

                    <h3>Leave your review</h3>

                    <form onSubmit={HandleFormSubmit}>

                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="text">Your review</label>
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