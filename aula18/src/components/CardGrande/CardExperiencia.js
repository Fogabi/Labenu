import React from "react";
import './CardExperiencia.css'

export default function CardExperiencia(props){
    return(
        <div className='containerCardExperiencia'>
            <img src={props.image} alt={props.imageAlt}/>
            <div>
                <h3>{props.enterprise}</h3>
                <p>{props.title}</p>
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                    <li>{props.item4}</li>
                    <li>{props.item5}</li>
                    <li>{props.item6}</li>
                    <li>{props.item7}</li>
                </ul>
            </div>
        </div>
    )
}