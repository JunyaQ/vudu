import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import Tvs from '../components/Tvs';
import Footer from '../components/Footer';

function Main() {

    return(
        <div>
        <header>
        <Navigation/>
        </header>

        <Hero/>
        <Movies/>
        <Tvs/>

        <footer>
        <Footer/>
        </footer>
        </div>
    )
}
export default Main;