import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: block;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;
const Divisor = styled.div`
  display: flex;
  margin-top: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    inputComentario: "",
  };

  onChangeInputComentario = (event) => {
    this.setState({ inputComentario: event.target.value });
  };

  render() {
    return (
      <CommentContainer>
        <Divisor>
          <InputComentario
            placeholder={"Comentário"}
            value={this.state.inputComentario}
            onChange={this.onChangeInputComentario}
          />

          <button onClick={this.props.aoEnviar}>Enviar</button>
        </Divisor>
      </CommentContainer>
    );
  }
}
