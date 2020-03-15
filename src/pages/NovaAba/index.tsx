import { SelectBox, TileView } from 'devextreme-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as React from 'react';
import { MenuItem } from '../../services/MenuItem';
import { Usuario } from '../../services/Usuario';
import { Logo } from './Logo';
import Styles, {
  Categoria,
  CategoriaTitulo,
  Centralizar,
  Descricao,
  GridContainer,
  Icone,
  Nome,
  TileItem,
  TileItemBotoes,
  TileIcone,
  TileItemNome
} from './styles';

interface INovaAbaProps {}

class NovaAba extends React.Component<INovaAbaProps> {
  private _selectBoxInput?: SelectBox | null;

  public componentDidMount() {
    this._selectBoxInput?.instance.focus();
  }

  public render() {
    return (
      <Styles>
        <Logo />
        <Centralizar>
          <SelectBox
            width="650px"
            placeholder=""
            grouped={true}
            displayExpr="nome"
            searchEnabled={true}
            itemRender={function(data: MenuItem) {
              return (
                <GridContainer>
                  <Icone>
                    <Icon iconName={data.icone} className={data.icone} />
                  </Icone>
                  <Nome>{data.nome}</Nome>
                  <Descricao>{data.descricao}</Descricao>
                </GridContainer>
              );
            }}
            dataSource={Usuario.ativo.obterMenu()}
            ref={input => {
              this._selectBoxInput = input;
            }}
          />
        </Centralizar>
        <Categoria>
          {Usuario.ativo.obterHistorico().map(grupo => (
            <div key={grupo.key}>
              <CategoriaTitulo>{grupo.key}</CategoriaTitulo>
              <TileView
                baseItemHeight={110}
                baseItemWidth={130}
                width="100%"
                height="auto"
                itemMargin={10}
                direction="vertical"
                itemRender={(data: MenuItem) => {
                  return (
                    <TileItem>
                      <TileItemBotoes>TODO</TileItemBotoes>
                      <TileIcone>
                        <Icon iconName={data.icone} className={data.icone} />
                      </TileIcone>
                      <TileItemNome>{data.nome}</TileItemNome>
                    </TileItem>
                  );
                }}
                dataSource={grupo.items}
              />
            </div>
          ))}
        </Categoria>
      </Styles>
    );
  }
}

export default NovaAba;
