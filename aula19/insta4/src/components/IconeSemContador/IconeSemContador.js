import React from "react";
import styled from "styled-components";

const IconeContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  margin-right: 5px;
`;

export default function IconeSemContador(props) {
  return (
    <IconeContainer>
      <Image src={props.icone} alt={"Icone"} onClick={props.onClickIcone} />
    </IconeContainer>
  );
}
