import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import MainBody from '../components/MainBody';
import Footer from '../components/Footer';
import "../App.css";
import MovieInfo from '../components/MovieInfo';

function HomePage() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default HomePage;

