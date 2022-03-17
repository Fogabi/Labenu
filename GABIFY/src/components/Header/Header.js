import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
`

const Header = (props) => {
    return(
        <HeaderContainer>
            <h1>GABIFY</h1>
            <ButtonsContainer>
                <button onClick={() => props.propChangePage('playlistCreationForm')}>Cadastrar playlist</button>
                <button onClick={() => props.propChangePage('playlistManagePage')}>Gerenciar playlists</button>
            </ButtonsContainer> 
        </HeaderContainer>
    )
}

export default Header