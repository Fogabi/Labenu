import React from "react";
import styled from "styled-components";

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class EnsinoGeral extends React.Component {
  render() {
    return (
      <PrincipalContainer>
        <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
        <h4>Você fez algum curso complementar?</h4>
        <select>
          <option>Sim</option>
          <option>Não</option>
        </select>
        <h4>Qual?</h4>
        <input placeholder={"Curso"} />
        <button onClick={this.props.turnBackButton}>Voltar</button>
        <button onClick={this.props.switchPage}>Próxima etapa</button>
      </PrincipalContainer>
    );
  }
}
