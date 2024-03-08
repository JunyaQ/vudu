import React,{useState,useEffect}  from 'react';
import Card from '../../components/Card';
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

      useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(data => setFilms(data))
        .catch(error => console.error('Error:', error));
    }, []);
      const [currentDate, setCurrentDate] = useState(getDate());
      const [movielist, setMovieList] = useState([]);
    //  rotate every 12 days , so need to know the date number of the year, and then /12 use reminder to rotate
    //   function getMovienumber(){
    //     setMovieList(previous => {
    //         if (currentDate.date/2==0){
    //            return [...previous,0];
    //         }
    //         else{
    //             return [...previous,1];
    //         }
    //       });
    //   }

    return(

        <div>
    
        <body>
        <h1 className="title">TODAY ONLY! </h1>
        <h1 className='freeTitle'>Watch it for free</h1>
        <h5 className="freeTitle">{currentDate}</h5>
        <Link  className= "cardName" to={`/movies/movie1`}>
        <Card pic={films?.[7]?.img} name={films?.[7]?.title}/>
        </Link>
        </body>

      
        </div>
    )
}
export default FreePage;