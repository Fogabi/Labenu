import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { axiosConfig, baseURL } from "../../constants/constants";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const CreationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-content: space-around;
`;
class PlaylistCreationPage extends React.Component {
  state = {
    inputPlaylistName: "",
  };

  changeInputNameValue = (event) => {
    this.setState({inputPlaylistName: event.target.value})
  }

  createPlaylist = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.inputPlaylistName
    }
    axios.post(baseURL, body, axiosConfig).then(() => {
      alert('Playlist criada com sucesso!')
      this.setState({inputPlaylistName: ''})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <FormContainer>
        <h1>Cadastrar nova playlist</h1>
        <CreationForm onSubmit={this.createPlaylist}>
          <label>Nova Playlist</label>
          <input
            placeholder={"Nome da Playlist"}
            value={this.state.inputPlaylistName}
            onChange={this.changeInputNameValue}
          />
          <button type="submit">Cadastrar</button>
        </CreationForm>
      </FormContainer>
    );
  }
}

export default PlaylistCreationPage;
