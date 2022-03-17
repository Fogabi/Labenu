import React from "react";
import styled from "styled-components";
import lixeira from "../../lixeira-de-reciclagem.png";

const TrackCardContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
  background-color: aliceblue;
  justify-content: space-around;
  border-radius: 10px;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const TrackName = styled.h4`
  margin: 7px;
`;

const ArtistContainer = styled.p`
  margin-right: 10px;
`;

const ButtonDelete = styled.img`
  color: red;
`;

const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackName>{props.name} - </TrackName>
        <ArtistContainer>{props.artist}</ArtistContainer>
        <ButtonDelete src={lixeira} 
        onClick={() => props.removeTrackFromPlaylist(props.trackId)}
        ></ButtonDelete>
      </div>

      <iframe width="200" height="200" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </TrackCardContainer>
  );
};

export default TrackCard;
