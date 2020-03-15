import { pascalCase } from 'change-case';
import DataGrid, {
  Column,
  Paging,
  Scrolling,
  Selection
} from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import React from 'react';
import { Context } from '../../services/Contex';
import * as Entities from '../../services/entities';
import Styles from './styles';

interface IIconeProps {}

const Icone: React.FC<IIconeProps> = props => {
  const buscar = { type: 'button' };
  const dataSource = new Context().Icone;
  const colunas = Entities.Entity.obterColunas(Entities.Icone);

  return (
    <Styles>
      <Toolbar>
        <Item location="before" widget="dxButton" options={buscar} />
      </Toolbar>
      <DataGrid dataSource={dataSource} showBorders={true} height="100%">
        <Scrolling mode="infinite" useNative={true} />
        <Paging defaultPageSize={20} />
        <Selection
          mode="multiple"
          selectAllMode="allPages"
          showCheckBoxesMode="onClick"
        />

        {colunas.map(coluna => (
          <Column
            key={coluna.propriedade}
            caption={coluna.etiqueta}
            format={coluna?.formatacao}
            dataField={pascalCase(coluna.propriedade)}
          />
        ))}
      </DataGrid>
    </Styles>
  );
};

export default Icone;
