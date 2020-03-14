/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Logo } from "./styles";
import { Aba } from "./components/Aba";
import { Home } from "./pages/Home";
import { Foto } from "./components/Foto";
import { Usuario } from "./services/Usuario";

const Espaco = styled.div`
  flex: 1 1 auto;
`;

const Direita = styled.div`
  color: #fff;
  font-size: 12px;
  text-align: right;
  white-space: nowrap;
  font-family: sans-serif;
`;

const Notificacoes = styled.span`
`;

const Nome = styled.div`
  display: inline-block;
  margin: 0px 5px;
`;

const HierarquiaAtiva = styled.div`
  margin: 0px 5px;
  display: inline-block;
`;

function App() {
  return (
    <Router>
      <Header>
        <Logo src="http://sistema.ravex.com.br/assets/images/logo-no-text-prod.svg" />
        <Aba titulo="Nova guia" />
        <Espaco />
        <Direita>
          <HierarquiaAtiva>Raiz</HierarquiaAtiva>
          <Notificacoes role="img" aria-label="Notificações">🔔</Notificacoes>
          <Nome>{Usuario.ativo.nome}</Nome>
          <Foto src={Usuario.ativo.foto} />
        </Direita>
      </Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
