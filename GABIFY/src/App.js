import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import PlaylistCreationPage from "./components/PlaylistCreatonForm/CreationPage";
import PlaylistManagePage from "./components/PlaylistManagerPage/ManagePage";
import backgroundImage from './musicBackground.jpg'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export default class App extends React.Component {
  state = {
    currentPage: "playlistCreationForm",
  };

  onChangePage = (paramCurrentPage) => {
    this.setState({ currentPage: paramCurrentPage });
    //Não foram criadas duas funções de Onchange uma pra cada botão, mas sim uma só que recebe um parâmetro dos botões como props (ver no indexHeader a passagem de props), e altera conforme esse parâmetro
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationForm") {
        return <PlaylistCreationPage />;
      } else if (this.state.currentPage === "playlistManagePage") {
        return <PlaylistManagePage />;
      }
    };

    return (
      <AppContainer>
        <Header propChangePage={this.onChangePage} />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}
