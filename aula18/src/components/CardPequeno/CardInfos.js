import React from "react";
import './CardInfos.css'

function CardInfos(props){
    return(
        <div className='containerCardInfos'>
            <img src={props.image} alt={props.imageAlt} className='imageCardInfos'/>
            <div>
                <h4>{props.title}</h4>
                <a href={props.link}>{props.text}</a>
            </div>
        </div>
    )
}

export default CardInfos