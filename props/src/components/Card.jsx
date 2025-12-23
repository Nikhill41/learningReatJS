import React from "react";
const Card=(props)=>{
    return(
        <div className="Card">
            <img src="https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    ) 
}
export default Card;