import React, { Component } from "react";
import styled from "styled-components";
import whatsapp from '../../img/whatsapp.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import snapchat from '../../img/snapchat.png'

const SendContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export default class SecaoCompartilhar extends Component{

    render(){
        return <SendContainer>
        <img src={whatsapp} alt={'Whatsapp'} onClick={this.props.onClickCompartilharCom}/>
        <img src={facebook} alt={'Facebook'} onClick={this.props.onClickCompartilharCom}/>
        <img src={twitter} alt={'Twitter'} onClick={this.props.onClickCompartilharCom}/>
        <img src={snapchat} alt={'Snapchat'} onClick={this.props.onClickCompartilharCom}/>
    </SendContainer>
    }
}