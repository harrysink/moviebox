import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { img_300 } from './Config';
import { unavailable } from './Config';
import './MainBody.css';

function MainBody() {
    const [state, setState] = useState([]);

    const fetchTopTen = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${'81abdeca72c4348650a82c23e71587e'}`)
        const dataJ = await data.json();
        setState(dataJ.results);
    };

    useEffect(() => {
        fetchTopTen();
    }, []);

    const arrowIcon = <FontAwesomeIcon
                            icon={faChevronRight}
                            style={
                                {
                                fontSize: 10
                                }
    }
    />

    state.map((Values) => {
        const {
            name,
            title,
            poster_path,
            release_date,
            run_time
        } = Values;
        return (
            <main className="main">
                <div className='page-top-head'>
                    <div className='page-title'>Featured Movie</div>
                    <div className='see-more'><a href='#'>See more</a> {arrowIcon}</div>
                </div>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div class="col-md-3 mb-4" key={id}>
                            <div class="card h-100 one" key={id} data-testid='movie-card'>
                                <img
                                    className="card-img-top"
                                    data-testid='movie-poster'
                                    src={poster_path ? `${img_300}/${poster_path}` : unavailable} 
                                    alt=""
                                    width="100%"
                                />
                                <div class="card-body">
                                    <h4 class="card-title" data-testid='movie-title'>{title || name}</h4>
                                    <p class="card-text" data-testid='movie-release-date'>{release_date || run_time}</p>
                                </div>
                                <div class="card-footer py-10">
                                    <a href="" class="btn btn-secondary"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    })
}

export default MainBody;