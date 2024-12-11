import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import MoviesPage from "./pages/moviesPage"
import SingleMoviePage from "./pages/SingleMoviePage"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<SingleMoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
