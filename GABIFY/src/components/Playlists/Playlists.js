import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseURL } from "../../constants/constants";
import PlaylistCard from "../playlistCard/PlaylistCard";

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
class Playlists extends React.Component {
  state = {
    playlistList: [],
  };

  componentDidMount = () => {
    this.fetchPlaylist()
  }


  deletePlaylist = (id) => {
    axios.delete(`${baseURL}/${id}`, axiosConfig).then(() => {
      const deleteConfirm = window.confirm('Deseja realmente excluir a playlist?')
      if(deleteConfirm){
        this.fetchPlaylist().then((resp) => {
          this.setState({playlistList: resp.data.result.list})
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  fetchPlaylist = () => {
    axios.get(baseURL, axiosConfig).then(resp => {
      this.setState({playlistList: resp.data.result.list})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const mapPlaylists = this.state.playlistList.map((item) => {
      return <PlaylistCard 
      seeDetails={this.props.changePage} 
      name={item.name} 
      playlistId ={item.id}
      deletePlaylist ={this.deletePlaylist}/>;
    });
    return <PlaylistsContainer>{mapPlaylists}</PlaylistsContainer>;
  }
}

export default Playlists;
