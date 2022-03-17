import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentado, setComentado] = useState(false)
  
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [listaCometarios, setListaComentarios] = useState([])

 
  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    }else{
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado)
  };

  const enviarComentario = (comentario) => {
    const novaListaComentarios = [...listaCometarios, comentario]
    setListaComentarios(novaListaComentarios)
    setComentado(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let componenteComentario = comentado? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    listaCometarios.map(comentario => {
      return <CommentContainer>
        <p>{comentario}</p>
      </CommentContainer>
    })
  )

  return (

    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={curtido? iconeCoracaoPreto: iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}

export default Post