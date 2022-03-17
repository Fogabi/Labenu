import React from "react";
import DadosGerais from "./pages/dadosGerais";
import InfosEnsinoSuperior from "./pages/infosSuperior";
import styled from "styled-components";
import EnsinoGeral from "./pages/ensinoGerais";
import FinalPage from "./pages/finalPage";

const PrincipalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

class App extends React.Component {
  state = {
    currentPage: "DadosGerais",
  };

  switchPage = () => {
    if (this.state.currentPage === "DadosGerais") {
      this.setState({ currentPage: "DadosSuperior" });
    } else if (this.state.currentPage === "DadosSuperior") {
      this.setState({ currentPage: "EnsinoGeral" });
    } else {
      this.setState({ currentPage: "FinalPage" });
    }
  };

  turnBackButton = () => {
    if(this.state.currentPage === 'EnsinoGeral'){
      this.setState({currentPage: 'DadosSuperior'})
    } else if(this.state.currentPage === 'DadosSuperior'){
      this.setState({currentPage: 'DadosGerais'})
    }
  }

  render() {
    let page;
    if (this.state.currentPage === "DadosGerais") {
      page = <DadosGerais switchPage={this.switchPage} turnBackButton={this.turnBackButton}/>;
    } else if (this.state.currentPage === "DadosSuperior") {
      page = <InfosEnsinoSuperior switchPage={this.switchPage} turnBackButton={this.turnBackButton}/>;
    } else if (this.state.currentPage === "EnsinoGeral") {
      page = <EnsinoGeral switchPage={this.switchPage} turnBackButton={this.turnBackButton}/>;
    } else {
      page = <FinalPage />;
    }

    return <PrincipalContainer className="App">{page}</PrincipalContainer>;
  }
}

export default App;
