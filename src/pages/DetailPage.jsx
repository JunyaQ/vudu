import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Detail from "../components/Detail";





function DetailPage({type}){
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
   return <div>Sorry something wrong .... T^T</div>;
 }
 return (
  <div className="container">
    <img src={require(`../imgs/background/${item.img}.jpeg`)} alt="background" className="image-container" />
  <div className="details-container">
    <Detail
      img={item.img}
      title={item.title}
      type={item.type}
      year={item.year}
      description={item.description}
      rentPrice={item.rentPrice}
      buyPrice={item.buyPrice}
    />
  </div>
</div>

  
 );
}


export default DetailPage;

