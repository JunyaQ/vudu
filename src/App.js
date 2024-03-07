import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import TvPage from './pages/TvPage';
import FreePage from './pages/FreePage';
import SigninPage from './pages/SigninPage';
import DetailPage from './pages/DetailPage';
// coming soon
import Comingsoon from './pages/Comingsoon';


function App() {
  return (
    <div className="App">
      <header>
      <Navigation/>
      </header>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/movies' element={<MoviePage/>}></Route>
      <Route path='/tvs' element={<TvPage/>}></Route>
      <Route path='/free' element={<FreePage/>}></Route>
      <Route path='/Signin' element={<SigninPage/>}></Route>
      <Route path="/movies/:id" element={<DetailPage type="movies"/>} ></Route>
      <Route path="/tvs/:id" element={<DetailPage type="tvs"/>} ></Route>
      <Route path='/comingsoon' element={<Comingsoon/>}></Route>
      </Routes>
      </BrowserRouter>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
