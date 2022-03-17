import React from "react";
import styled from "styled-components";
import PlaylistDetails from "../PlaylistDetail/PlaylistDetail";
import Playlists from "../Playlists/Playlists";

const FormContainer = styled.div``;

class PlaylistManagePage extends React.Component {

  state = {
    currentPage : 'Playlists',
    playlistId: ''
  };

  onChangePage = (paramCurrentPage, playlistId) => {
    this.setState({ currentPage: paramCurrentPage, playlistId: playlistId });
  };

  render() {
    
    const renderCurrentPage = () => {
      if (this.state.currentPage === "Playlists") {
        return <Playlists changePage={this.onChangePage}/>;
      } else if (this.state.currentPage === "PlaylistDetails") {
        return <PlaylistDetails changePage={this.onChangePage} playlistId={this.state.playlistId}/>;
      }
    };
    return (
      <FormContainer>
        {renderCurrentPage()}
      </FormContainer>
    );
  }
}

export default PlaylistManagePage;
