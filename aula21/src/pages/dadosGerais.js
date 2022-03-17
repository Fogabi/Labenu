import React from "react";
import styled from "styled-components";

const PrincipalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export default class DadosGerais extends React.Component {
  render() {
    return (
      <PrincipalContainer>
        <h2>DADOS GERAIS</h2>
        <h4>Qual é o seu nome?</h4>
        <input placeholder={"Nome"} required/>
        <h4>Qual é a sua idade?</h4>
        <input placeholder={"Idade"} required/>
        <h4>Qual é o seu e-mail?</h4>
        <input placeholder={"E-mail"} />
        <h4>Qual é a sua escolaridade?</h4>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Cursando</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
        <button onClick={this.props.switchPage}>Próxima etapa</button>
      </PrincipalContainer>
    );
  }
}
