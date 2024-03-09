import React,{useState,useEffect}  from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './FreePage.css';

function FreePage() {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }
      const [films, setFilms] = useState([]);

    //   useEffect(() => {
    //     fetch('http://localhost:3001/movies'||'api/movies')
    //     .then(response => response.json())
    //     .then(data => setFilms(data))
    //     .catch(error => console.error('Error:', error));
    // }, []);
    useEffect(() => {
      fetch('/api/movies')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error:', error));
  }, []);
      const currentDate = getDate();
      
    //  only have 15 movies
      function getMovienumber(){
        const date = new Date().getDate();
        const reminder = date%15;
        return reminder;
      }
      const movienum = getMovienumber();
      console.log(movienum);

    return(

        <div>
    
        <body>
        <h1 className="title">TODAY ONLY! </h1>
        <h1 className='freeTitle'>Watch it for free</h1>
        <h5 className="freeTitle">{currentDate}</h5>
        <Link  className= "cardName" to={`/movies/movie1`}>
        <Card pic={films?.[movienum]?.img} name={films?.[movienum]?.title}/>
        </Link>
        </body>

      
        </div>
    )
}
export default FreePage;