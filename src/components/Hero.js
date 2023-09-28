import { useState } from "react";
import { useEffect } from "react";
import imdb from '../images/imdb.svg';
import { Link } from "react-router-dom";
import './Hero.css';

function Hero() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=81abdeca72c4348650a82c23e715870e&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setState(data.results.slice(0, 1)))
    }, []);

    return (
        <div className='hero'>
            
                <div id="heroslider" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#heroslider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#heroslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#heroslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    {state.map(banner => (
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="8000">
                                <img src={`https://image.tmdb.org/t/p/w500${banner.backdrop_path}`} class="d-block w-100"/>
                                <div class="carousel-caption top-0 mt-5 pt-4 d-md-block">
                                    <h1 class="display-1 mt-5 mb-2">{banner.title}</h1>
                                    <div class="rating">
                                        <img className='imdb' src={imdb}/> {banner.vote_average}/10
                                    </div>
                                    <p class="fw mt-3 mg-2">{banner.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button class="carousel-control-prev" type="button" data-bs-target="#heroslider" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#heroslider" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        
        </div>
    )
}

export default Hero;