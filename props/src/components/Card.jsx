import React from "react";
const Card=(props)=>{
    return(
        <div className="Card">
            <img src={props.imgLink} alt="" />
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    ) 
}
export default Card;