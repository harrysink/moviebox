import MovieInfo from '../components/MovieInfo';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import '../App.css';

function MovieInfoPage() {
    return (
        <div className='App'>
            <NavBar/>
            <MovieInfo/>
        </div>
    )
}

export default MovieInfoPage;