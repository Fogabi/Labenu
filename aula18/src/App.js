import React from 'react'
import './App.css';
import Botao from './components/Botao/Botao';
import CardInfos from './components/CardPequeno/CardInfos';
import CardExperiencia from './components/CardGrande/CardExperiencia';
import faculdade from './faculdade.png'
import reactIcom from './react.png'
import email from './email.png'
import descomplica from './descomplica.png'
import tribunal from './tribunal.png'
import celular from './celular.png'
import quero from './Quero.png'
import github from './github.png'
import linkedin from './linkedin.png'

function App() {
  return (
    <div className="App">
      <h2>Gabriela Fogaça Cunha</h2>
      <CardInfos 
        image={email}
        imageAlt='E-mail'
        title='E-mail'
        text='gabifogaca.gabriela@gmail.com'
      />

      <CardInfos 
        image={celular}
        imageAlt='Celular'
        title='Celular'
        text='+55 (12) 98217-1835'
      />

      <h2>Experiências</h2>

      <CardExperiencia 
        image={tribunal}
        imageAlt='Tribunal'
        enterprise='Tribunal de Justiça'
        title='Vara da Violência Doméstica Contra a Mulher'
        item1='Andamento e organização processual;'
        item2='Atendimento ao público;'
        item3='Recebimento, remessa e juntada de documentos processuais;'
        item4='Intermediação com os setores social e psicológico criminal;'
        item5='Intermediação entre cartório e outras entidades como Ministério Público, Distrito Policial'
      /> 

      <CardExperiencia 
        image={quero}
        enterprise='Quero Educação'
        imageAlt='Quero'
        title='Departamento Jurídico'
        item1='Acompanhamento e organização processual;'
        item2='Escrita de documentos judiciais: defesas (contestação e recurso), petições, entre outros;'
        item3='Atendimento às demandas de Procon (defesas administrativas);'
        item4='Mitigação de riscos e mapeamentos das demandas para redução de custas;'
        item5='Organização financeira no contencioso;'
        item6='Análise, revisão e cobrança de contratos;'
        item7='Participação em audiências'
      />

      <CardExperiencia 
        image={descomplica}
        imageAlt='Descomplica'
        enterprise='Descomplica'
        title='CSC | Security & Compliance'
        item1='Manutenção e gerenciamento de segurança de dados e governança de sistemas:'
        item2='*Acessos (SoD);'
        item3='*Padronizações;'
        item4='*Riscos e PAM Control;'
        item5='*DLP e Vulnerabilidade (LGPD);'
        item6='Criação, análise e manutenção de relatórios PL/SQL;'
        item7='Automatização e modelagem de processos'
      />
      <h2>Estudos</h2>

      <CardInfos 
        image={faculdade}
        imageAlt='Faculdade'
        title='Análise e Desenvolvimento de Sistemas'
        text='Faculdade Descomplica'
      />

      <CardInfos 
        image={reactIcom}
        imageAlt='Bootcamp'
        title='Front-End com React'
        text='Labenu'
      />

      <h2>Redes Sociais</h2>

      <Botao 
        image={linkedin}
        imageAlt='LinkedIn'
        text='LinkedIn'
        link='https://www.linkedin.com/in/gabriela-foga%C3%A7a-cunha-864261174/'
      />

      <Botao 
        image={github}
        imageAlt='GitHub'
        text='GitHub'
        link='https://github.com/Fogabi'
      />
    </div>
  );
}

export default App;
