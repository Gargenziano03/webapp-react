import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <header className="bg-light py-3 px-4 shadow">
            <nav>
                <NavLink to="/" className="text-decoration-none">
                    <strong>Home</strong>
                </NavLink>
            </nav>
        </header>
    )
}