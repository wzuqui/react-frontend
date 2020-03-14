import * as React from "react";
import styled from "styled-components";
import { SelectBox } from "devextreme-react/select-box";
import { TileView, Item } from "devextreme-react/tile-view";
import { Icon } from "office-ui-fabric-react/lib/Icon";

import { Menu } from "../services/Menu";
import { ColorPrimary } from "../styles";
import { MenuItem } from "../services/MenuItem";

const LogoComponent: React.FunctionComponent<{
  className?: string;
}> = props => (
  <div className={props.className}>
    <img
      src="http://sistema.ravex.com.br/assets/images/ravex.svg"
      height="100px"
      alt="Ravex"
    />
  </div>
);

const StyledLogo = styled(LogoComponent)`
  padding-top: 20px;
`;
const StyledCenter = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const StyledCategoria = styled.div`
  width: 750px;
  margin: auto;
  padding: 20px;
  margin-top: 10px;
`;

const StyledCategoriaTitulo = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: left;
`;

const StyledItem = styled.div`
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-flow: column;
  color: ${ColorPrimary};
`;

const StyledItemNome = styled.div`
  font-size: 14px;
  font-weight: 400;
  align-self: center;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  top: 10%;
  max-height: 46px;
  transform: translateY(-50%);
`;

const StyledBotoes = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: space-between;
`;

const StyledIcone = styled.div`
  align-self: center;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  top: 10%;
  max-height: 46px;
  transform: translateY(-50%);
`;

function ItemComponent(data: MenuItem) {
  return (
    <StyledItem>
      <StyledBotoes>a</StyledBotoes>
      <StyledIcone>
        <Icon iconName={data.icone} className={data.icone} />
      </StyledIcone>
      <StyledItemNome>{data.nome}</StyledItemNome>
    </StyledItem>
  );
}

export interface IHomeProps {
  className?: string;
}

class HomeComponent extends React.Component<IHomeProps> {
  selectBoxInput?: SelectBox | null;

  componentDidMount() {
    this.selectBoxInput?.instance.focus();
  }

  public render() {
    const { className } = this.props;
    const historico = [
      {
        key: "Recentes",
        items: [
          Menu.grupoMacro,
          Menu.rota,
          Menu.embarqueEmEquipamento,
          Menu.veiculoTipo,
          Menu.veiculo
        ]
      },
      {
        key: "Mais acessados",
        items: [
          Menu.mapaMonitoramento,
          Menu.pessoa,
          Menu.regraServidorEmHierarquiaOrganizacional,
          Menu.embarqueEmEquipamento,
          Menu.historicoVeiculo
        ]
      },
      {
        key: "Favoritos",
        items: [Menu.consultaInstalacao]
      }
    ];

    return (
      <div className={className}>
        <StyledLogo />
        <StyledCenter>
          <SelectBox
            width="650px"
            placeholder=""
            searchEnabled={true}
            ref={input => {
              this.selectBoxInput = input;
            }}
          />
        </StyledCenter>
        <StyledCategoria>
          {historico.map(grupo => (
            <div key={grupo.key}>
              <StyledCategoriaTitulo>{grupo.key}</StyledCategoriaTitulo>
              <TileView
                baseItemHeight={110}
                baseItemWidth={130}
                width="100%"
                height="auto"
                itemMargin={10}
                direction="vertical"
                itemRender={ItemComponent}
                dataSource={grupo.items}
              />
            </div>
          ))}
        </StyledCategoria>
      </div>
    );
  }
}

export const Home = styled(HomeComponent)`
  text-align: center;
`;
