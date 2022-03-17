import React from 'react'
import './Botao.css'

function Botao(props) {
    return(
        <a className='containerBotao' href={props.link}>
            <img src={props.image} alt={props.imageAlt} className='imageBotao'/>
            <p>{props.text}</p>
        </a>
    )
}

export default Botao