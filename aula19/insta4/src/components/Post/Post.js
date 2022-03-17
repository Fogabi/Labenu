import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import IconeSemContador from "../IconeSemContador/IconeSemContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeMarcado from "../../img/bookmark_black.svg";
import iconeDesmarcado from "../../img/bookmark_white.svg";
import iconeCompartilhar from "../../img/send.svg";

import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import SecaoCompartilhar from "../SecaoCompartilhar/SecaoCompartilhar";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;
const Divisao = styled.div`
  display: flex;
  align-items: center;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhar: false,
    listaMensagens: [],
  };

  onClickAbrirCompartilhador = () => {
    this.setState({compartilhar: !this.state.compartilhar})
  }

  onClickMarcador = () => {
    this.setState({ marcado: !this.state.marcado });
  };

  onClickCurtida = () => {
    this.setState({ curtido: !this.state.curtido });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickCompartilharCom = () => {
    alert('Imagem compartilhada!')
    this.setState({
      compartilhar: false
    })
  }
  

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
      this.state.numeroCurtidas = 1;
    } else {
      iconeCurtida = iconeCoracaoBranco;
      this.state.numeroCurtidas = 0;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteExtra

    if(this.state.compartilhar){
      componenteExtra = (
        <SecaoCompartilhar onClickCompartilharCom={this.onClickCompartilharCom}/>
      )
    }

    let iconeMarcador;

    if (this.state.marcado) {
      iconeMarcador = iconeMarcado;
    } else {
      iconeMarcador = iconeDesmarcado;
    }

    return (
      <PostContainer>
        <PostHeader>
          <Divisao>
            <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
            <p>{this.props.nomeUsuario}</p>
          </Divisao>
          <Divisao>
            <IconeSemContador
              icone={iconeMarcador}
              onClickIcone={this.onClickMarcador}
            />

            <IconeSemContador 
              icone={iconeCompartilhar}
              onClickIcone={this.onClickAbrirCompartilhador}
            />
          </Divisao>
        </PostHeader>

        {componenteExtra}

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
