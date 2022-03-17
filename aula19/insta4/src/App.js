import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import fotoPerfil from "./img/fotoPerfil.png";
import fotoPost from "./img/fotoPost.png";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 0px;
  padding: 5px;
  justify-content: space-between;
`;

class App extends React.Component {
  state = {
    listaDePosts: [
      {
        nomeUsuario: "Gabi Fogaça",
        fotoUsuario: fotoPerfil,
        fotoPost: fotoPost,
      },
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
  };

  onChanceInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };

  onChanceInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  onChanceInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  onClickCriarPost = () => {
    const novaListaPost = [...this.state.listaDePosts];
    novaListaPost.push({
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    });
    this.setState({
      listaDePosts: novaListaPost,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
    });
  };

  render() {
    const listaDeComponentes = this.state.listaDePosts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <h3>Insira uma nova foto!</h3>
        <FormContainer>
          <input
            placeholder={"Insira nome do usuário"}
            value={this.state.inputNomeUsuario}
            onChange={this.onChanceInputNomeUsuario}
          />
          <input
            placeholder={"Link da foto de perfil"}
            value={this.state.inputFotoUsuario}
            onChange={this.onChanceInputFotoUsuario}
          />
          <input
            placeholder={"Link da foto do post"}
            value={this.state.inputFotoPost}
            onChange={this.onChanceInputFotoPost}
          />
          <button onClick={this.onClickCriarPost}>Adicionar</button>
        </FormContainer>
        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
