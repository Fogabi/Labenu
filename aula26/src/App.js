import React from "react";
import axios from "axios";
import styled from "styled-components";

const PrincipalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  margin-left: 30%;
  margin-right: 30%;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
`
const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
`
const ButtonOneStyle = styled.button`
  margin-left: 35%;
  margin-right: 35%;
`

const ButtonTwoStyle = styled.button`
  margin-left: 28%;
  margin-right: 28%;
`
const UserContainer = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 5%;
`
const DeleteButtonStyle = styled.button`
  height: 5%;
  align-self: center;
`

export default class App extends React.Component {
  state = {
    currentPage: "CreateUserPage",
    inputName: "",
    inputEmail: "",
    userList: [],
    getUser: [],
  };

  onClickSwitchPage = () => {
    if (this.state.currentPage === "CreateUserPage") {
      this.setState({ currentPage: "UserListPage" });
    } else if (this.state.currentPage === "UserListPage") {
      this.setState({ currentPage: "CreateUserPage" });
    }
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  componentDidMount = () => {
    this.getAllUsers().then((resp) => {
      this.setState({ userList: resp.data });
    });
  };

  onClickCriarUsuario = () => {
    return axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          name: this.state.inputName,
          email: this.state.inputEmail,
        },
        {
          headers: {
            Authorization: "gabriela-fogaca-johnson",
          },
        }
      )
      .then(
        this.getAllUsers().then((resp) => {
          this.setState({ userList: resp.data });
          this.setState({ inputEmail: "", inputName: "" });
        })
      );
  };

  getAllUsers = () => {
    return axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "gabriela-fogaca-johnson",
        },
      }
    );
  };

  onClickDeleteUser = (id) => {
    const deleteConfirm = window.confirm("Deseja realmente excluir o usuário");
    if (deleteConfirm === true) {
      return axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "gabriela-fogaca-johnson",
            },
          }
        )
        .then(() => {
          this.getAllUsers().then((resp) => {
            this.setState({ userList: resp.data });
          });
        });
    }
  };

  render() {
    const renderPage = () => {
      if (this.state.currentPage === "CreateUserPage") {
        return (
          <div>
            <Title>Listinha de Usuários</Title>
            <ButtonOneStyle onClick={this.onClickSwitchPage}>Trocar página</ButtonOneStyle>
            <SubTitle>Criar usuário</SubTitle>
            <input
              placeholder={"Nome"}
              value={this.state.inputName}
              onChange={this.onChangeInputName}
            />
            <input
              placeholder={"E-mail"}
              value={this.state.inputEmail}
              onChange={this.onChangeInputEmail}
            />
            <button onClick={this.onClickCriarUsuario}>Criar</button>
          </div>
        );
      } else if (this.state.currentPage === "UserListPage") {
        return (
          <div>
            <Title>Listinha de Usuários</Title>
            <ButtonTwoStyle onClick={this.onClickSwitchPage}>Trocar página</ButtonTwoStyle>
            <SubTitle>Lista de usuários</SubTitle>
            {this.state.userList.map((users, i) => {
              return (
                <UserContainer>
                  <p key={i}>{users.name}</p>
                  <DeleteButtonStyle onClick={() => this.onClickDeleteUser(users.id)}>
                    X
                  </DeleteButtonStyle>
                </UserContainer>
              );
            })}
          </div>
        );
      }
    };
    return <PrincipalContainer>{renderPage()}</PrincipalContainer>;
  }
}
