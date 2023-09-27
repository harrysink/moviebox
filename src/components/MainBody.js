import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import imdb from '../images/imdb.svg';
import './MainBody.css';
import { Link } from "react-router-dom";


function MainBody() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=81abdeca72c4348650a82c23e715870e&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setState(data.results.slice(0, 10)))
    }, []);
    const arrowIcon = <FontAwesomeIcon
                            icon={faChevronRight}
                            style={
                                {
                                fontSize: 10
                                }
    }
    />
    const linkStyle =  {
        display: 'flex',
        textDecoration: 'none'
    }
    return (
            <main className="main">
                <div className='page-top-head'>
                    <div className='page-title'>Featured Movie</div>
                    <div className='see-more'><a href='#'>See more</a> {arrowIcon}</div>
                </div>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        {state.map(card => (
                            <div class="col-md-3 mb-4">
                                <Link to={`/${card.id}`} style={linkStyle}> 
                                    <div class="card h-100 one" data-testid='movie-card'>
                                        <img
                                            className="card-img-top"
                                            data-testid='movie-poster'
                                            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                                            alt=""
                                            width="100%"
                                        />
                                        <div class="card-body">
                                            <h6 class="card-title" data-testid='movie-title'>{card.title}</h6>
                                            <p class="card-text" data-testid='movie-release-date'>{card.release_date}</p>
                                        </div>
                                        <div class="card-footer py-10">
                                            <img className='imdb' src={imdb}/>{card.vote_average}/10
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        )
}

export default MainBody;
