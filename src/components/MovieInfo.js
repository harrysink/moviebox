import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieInfo.css' 

function MovieInfo() {
    const [state, setState] = useState([]);

    const {id} = useParams() 


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81abdeca72c4348650a82c23e715870e&language=en-US`)
        .then(res => res.json())
        .then(data => setState(data))
    }, [])

    return (
        <main>
            <div className='video-hero'>
                <img src={`https://image.tmdb.org/t/p/w500${state.backdrop_path}`}/>
            </div>
            <h5 className='movie-info'>
                {state.title}
            </h5>
            <div className='lower-half'>
                <div className='movie-summary'>
                    <p className='overview'>{state.overview}</p>
                    <p className='writers'><span>Release date:</span> {state.release_date} </p>
                    <p className='director'><span>Runtime:</span> {state.runtime}mins</p>
                    <p className='stars'><span>Rating:</span> {state.vote_average}/10</p>
                    {/* <div className='movie-credits'>
                        <span className='top-rated'>Top rated movie #65</span>
                        <select className='awards'name="delivery-time" id="delivery-time">
                            <option value="d1">Awards 9 nominations</option>
                            <option value="d2">Awards 10 nominations</option>
                            <option value="d3">Awards 11 nominations</option>
                        </select>
                    </div> */}
                </div>
                <div className='movie-option'>
                    <div className='showtimes'>See Showtimes</div>
                    <div className='watch-options'>More watch options</div>
                    {/* <div className='movie-rectangular-tile'></div> */}
                </div>
            </div>
        </main>
    )
}

export default MovieInfo;