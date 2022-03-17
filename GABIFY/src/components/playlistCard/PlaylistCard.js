import React from "react";
import styled from "styled-components";
import lixeira from '../../lixeira-de-reciclagem.png'

const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  width: 20%;
  justify-content: space-around;
  border-radius: 10px;
`;

const PlaylistName = styled.p`
  margin: 7px;

`

const ButtonDelete = styled.img`
  color: red;
`

const PlaylistCard = (props) => {
    return (
      <CardContainer>
        <PlaylistName onClick={() => props.seeDetails("PlaylistDetails", props.playlistId)}>{props.name}</PlaylistName>
        <ButtonDelete src={lixeira} onClick={() => props.deletePlaylist(props.playlistId)}></ButtonDelete>
      </CardContainer>
    );
}

export default PlaylistCard;