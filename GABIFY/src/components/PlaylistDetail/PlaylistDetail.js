import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseURL } from "../../constants/constants";
import TrackCard from "../TrackCard/TrackCard";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackCreationForm = styled.form`
  display: flex;
  width: 100vw;
  align-items: center;
  height: 100px;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
`;

class PlaylistDetails extends React.Component {
  state = {
    tracks: [],
    inputTrackName: "",
    inputTrackArtist: "",
    inputTrackUrl: "",
  };

  componentDidMount = () => {
    this.fetchTracks();
  };

  fetchTracks = () => {
    axios
      .get(`${baseURL}/${this.props.playlistId}/tracks`, axiosConfig)
      .then((resp) => {
        this.setState({ tracks: resp.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeTrackFromPlaylist = (trackId) => {
    axios
      .delete(
        `${baseURL}/${this.props.playlistId}/tracks/${trackId}`,
        axiosConfig
      )
      .then(() => {
        this.fetchTracks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeInputValues = (event) => {
    this.setState({[event.target.name]: event.target.value} )
  }

  addTrackToPlaylist = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.inputTrackName,
      artist: this.state.inputTrackArtist,
      url: this.state.inputTrackUrl
    }

    axios.post(`${baseURL}/${this.props.playlistId}/tracks`,body, axiosConfig).then(() => {
      this.fetchTracks()
      this.setState({inputTrackName: '', inputTrackArtist: '', inputTrackUrl: ''})
    }).catch((err) => {
      console.log(err)
    })

  }

  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          name={track.name}
          artist={track.artist}
          url={track.url}
          trackId={track.id}
          removeTrackFromPlaylist={this.removeTrackFromPlaylist}
        />
      );
    });
    return (
      <DetailsContainer>
        <TrackCreationForm onSubmit={this.addTrackToPlaylist}>
          <div>
            <label>Nome da música:</label>
            <input
              value={this.state.inputTrackName}
              placeholder={"Nome da música"}
              name={'inputTrackName'}
              onChange={this.onChangeInputValues}
            />
          </div>
          <div>
            <label>Artista:</label>
            <input
              value={this.state.inputTrackArtist}
              placeholder={"Artista"}
              name={'inputTrackArtist'}
              onChange={this.onChangeInputValues}
            />
          </div>
          <div>
            <label>URL:</label>
            <input
              value={this.state.inputTrackUrl}
              placeholder={"URL da música"}
              name={'inputTrackUrl'}
              onChange={this.onChangeInputValues}
            />
          </div>
          <button type="submit">Adicionar música</button>
        </TrackCreationForm>
        {tracks}
        <button onClick={() => this.props.changePage("Playlists", "")}>
          Voltar
        </button>
      </DetailsContainer>
    );
  }
}

export default PlaylistDetails;
