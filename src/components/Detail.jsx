import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";


function Detail({type}){
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  console.log(type);
  useEffect(() => {
      let url = `http://localhost:3001/${type}/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!id) {
          if (data.length > 0) {
            setItem(data[0]);
          }
        } else {
          setItem(data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [type, id]); 

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={require(`../imgs/background/${item.img}.jpeg`)} className='backgroundImg'/> 
      <Card.ImgOverlay>
        <div>
      <img src={require(`../imgs/movies/${item.img}.jpeg`)} className='movieimg'/>
      </div>

        <Card.Title className="detailTitle">{item.title}</Card.Title>
        <Card.Text>
        <div>
      <p>Year: {item.year}</p>
    </div>
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    
  );
}

export default Detail;