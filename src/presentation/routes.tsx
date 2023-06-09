import { Routes, Route } from 'react-router-dom'
import { MovieList } from "./screens/movies/usecases/list-movies/movie-list";
import { NotFoundScreen } from './screens/not-found/not-found';
import { CharacterList } from './screens/characters/usecases/list-characters/character-list';
import { MovieInner } from './screens/movies/usecases/see-movie-details/movie-inner';
import { CharacterInner } from './screens/characters/usecases/see-character/character-inner';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/character/:characterId/:tabId" element={<CharacterInner />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movie/:movieId/:tabId" element={<MovieInner />} />
      <Route path="/" element={<MovieList />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}