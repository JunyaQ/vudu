import React from "react";
function DetailIfno({img,title,type,year,description,rentPrice, buyPrice}){
    return(
        <div className="container">
            <div>
            <img src={require(`../imgs/movies/${img}.jpeg`)} className='movieimg'/>
            </div>
            <div>
            <h1 className="detailTitle">{title}</h1>
            {type.map(a=>(
                <p>{a}  |</p>
            ))}
            <p>{year}</p>

            {/* Synopsis */}
            <p>{description}</p>
            <button className="btn">Rent: {rentPrice}</button>
            <button className="btn">Buy: {buyPrice}</button>
            </div>

        </div>
    )

}
export default DetailIfno;