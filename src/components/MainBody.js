/*import { useState } from "react";*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MainBody.css';

function MainBody() {
    /*const [findFood, setfindFood] = useState(false);*/
    const arrowIcon = <FontAwesomeIcon
                            icon={faChevronRight}
                            style={
                                {
                                fontSize: 10
                                }
    }
 />

    return (
        <main className="main">
            <div className='page-top-head'>
                <div className='page-title'>Featured Movie</div>
                <div className='see-more'><a href='#'>See more</a> {arrowIcon}</div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
                            </div>
                            <div class="card-footer py-10">
                                <a href="" class="btn btn-secondary"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 one" data-testid='movie-card'>
                            <img class="car-img-top" data-testid='movie-poster' src=" " alt="" width="100%"></img>
                            <div class="card-body">
                                <h4 class="card-title" data-testid='movie-title'></h4>
                                <p class="card-text" data-testid='movie-release-date'></p>
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
}

export default MainBody;