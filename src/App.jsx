import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import AppLayout from "./layouts/AppLayout"
import MoviesPage from "./pages/MoviesPage"
import SingleMoviePage from "./pages/SingleMoviePage"
import NotFound from "./components/NotFound"
import GlobalContext from "./contexts/GlobalContexts"

function App() {

  const [loding, setLoading] = useState(false)
  const values = {
    loding,
    setLoading
  }
  return (
    <>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>

          <Routes>

            <Route element={<AppLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path="movies/:id" element={<SingleMoviePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>

        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
