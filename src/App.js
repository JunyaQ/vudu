import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import TvPage from './pages/TvPage';
import FreePage from './pages/FreePage';
import MyvuduPage from './pages/MyvuduPage';
import RedeemPage from './pages/RedeemPage';
import SigninPage from './pages/SigninPage';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/movies' element={<MoviePage/>}></Route>
      <Route path='/tvs' element={<TvPage/>}></Route>
      <Route path='/free' element={<FreePage/>}></Route>
      <Route path='/myvudu' element={<MyvuduPage/>}></Route>
      <Route path='/Redeem' element={<RedeemPage/>}></Route>
      <Route path='/Signin' element={<SigninPage/>}></Route>
      <Route path="/movies/:id" element={<Detail type="movies"/>} ></Route>
      <Route path="/tvs/:id" element={<Detail type="tvs"/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
