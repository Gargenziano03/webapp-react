import { useParams } from "react-router-dom"
import Banner from "../components/Banner";
useParams
export default function SingleMoviePage() {
    const { id } = useParams()

    return (
        <Banner title="movie" subtitle="common films" />
    )
}