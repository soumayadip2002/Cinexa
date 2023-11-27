import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Country from "./pages/Country"
import Genre from "./pages/Genre"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"
import SingleMovie from "./pages/SingleMovie"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<Country />} />
      <Route path="/:genre/:id" element={<Genre />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/details/:type/:id" element={<SingleMovie />} />
    </Routes>
  )
}

export default App
