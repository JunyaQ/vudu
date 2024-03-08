import React from "react";
function DetailIfno({img,title,type,year,description,rentPrice, buyPrice}){
    return(
        <div className="detailContainer">
            <div className="movieimg">
            <img src={require(`../imgs/movies/${img}.jpeg`)} className='movieimg'/>
            </div>
            <div>
            <h1 className="detailTitle">{title}</h1>
            <div className="category-container">
            {type.map(a=>(
                <p className="category">{a}  |</p>
            ))}
           
            <p className="category">{year}</p>
            </div>

            {/* Synopsis */}
            <p className="description">{description}</p>
            <div className="btn-container">
            <button className="rentBtn">Rent: {rentPrice}</button>
            <button className="buyBtn">Buy: {buyPrice}</button>
            </div>
            </div>

        </div>
    )

}
export default DetailIfno;