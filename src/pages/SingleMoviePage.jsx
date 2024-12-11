import { useParams } from "react-router-dom"

useParams
export default function SingleMoviePage() {
    const { id } = useParams()

    return (
        <h1>Single Movie id: {id}</h1>
    )
}