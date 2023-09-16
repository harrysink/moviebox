import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieInfoPage from './pages/MovieInfoPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:id" element={<MovieInfoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



