import React,{useState}  from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
function FreePage() {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }
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
        <Card pic={require(`../imgs/movies/movie1.jpeg`)} name={"Avatar - The way of Water"}/>
        </Link>
        </body>

      
        </div>
    )
}
export default FreePage;