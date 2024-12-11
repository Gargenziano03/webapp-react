import { Link } from "react-router-dom"
export default function MovieCard({ movie }) {
    return (
        <div className="movie card">
            <div className="card-body d-flex flex-column align-items-baseline">
                <h4>{movie.title}</h4>
                <span className="text-muted">By <span>{movie.director}</span></span>
                <span>{movie.genre}</span>
                <span>{movie.yaer}</span>
                <p className="overview mb-3">
                    {movie.description}
                </p>
                <span>{movie.created_at}</span>
                <span>{movie.updated_at}</span>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );
}