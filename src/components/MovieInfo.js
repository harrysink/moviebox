import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import './MovieInfo.css' 

function MovieInfo() {
    return (
        <main>
            <div className='image-hero'>
                <img src='' alt=''/>
            </div>
            <div className='lower-half'>
                <div className='movie-summary'>
                    <p className='summary'>yswyvvdvqgvcgvgqhe</p>
                    <p className='director'>Director: </p>
                    <p className='writers'>Writers: </p>
                    <p className='stars'>Stars: </p>
                    <p><span>Top rated movie #65</span> Awards 9 nominations</p>
                </div>
                <div className='movie-option'>
                    <div>See Showtimes</div>
                    <div>More watch options</div>
                    <div></div>
                </div>
            </div>
        </main>
    )
}

export default MovieInfo;