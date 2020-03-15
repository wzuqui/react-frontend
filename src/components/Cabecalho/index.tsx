/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Usuario } from '../../services/Usuario';
import Aba from './Aba';
import Foto from './Foto';
import Logo from './Logo';
import Styles, {
  Direita,
  Espaco,
  HierarquiaAtiva,
  Nome,
  Notificacoes
} from './styles';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Menu } from '../../services/Menu';
import { MenuItem } from '../../services/MenuItem';

interface ICabecalhoProps {
  toggleTheme(): void;
}

const Cabecalho: React.FC<ICabecalhoProps> = ({ toggleTheme }) => {
  // todo workarround
  const rotaAtiva = window.location.pathname.replace('/', '');
  const menuAtivo =
    Menu.obterLista().find(menu => menu.rota === rotaAtiva) ||
    new MenuItem('Nova guia', 'Nova guia', '', '', '');

  console.log(menuAtivo);

  return (
    <Styles>
      <Logo src="http://sistema.ravex.com.br/assets/images/logo-no-text-prod.svg" />
      <Aba titulo={menuAtivo.nome} icone={menuAtivo.icone} />
      <Espaco />
      <Direita>
        <HierarquiaAtiva>
          <Toggle onChange={toggleTheme} />
        </HierarquiaAtiva>
        <HierarquiaAtiva>Raiz</HierarquiaAtiva>
        <Notificacoes role="img" aria-label="Notificações">
          🔔
        </Notificacoes>
        <Nome>{Usuario.ativo.nome}</Nome>
        <Foto src={Usuario.ativo.foto} />
      </Direita>
    </Styles>
  );
};

export default Cabecalho;
