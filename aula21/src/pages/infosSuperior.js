import React from "react";
import styled from "styled-components";

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class InfosEnsinoSuperior extends React.Component {
  render() {
    return (
      <PrincipalContainer>
        <h2>INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <h4>Qual curso?</h4>
        <input placeholder={"Curso"} />
        <h4>Qual o nome da instituição de ensino?</h4>
        <input placeholder={"Instituição de ensino"} />
        <button onClick={this.props.turnBackButton}>Voltar</button>
        <button onClick={this.props.switchPage}>Próxima etapa</button>
      </PrincipalContainer>
    );
  }
}
