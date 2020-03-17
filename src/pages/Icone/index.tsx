import { pascalCase } from 'change-case';
import { Template } from 'devextreme-react/core/template';
import DataGrid, { Column, FilterPanel, HeaderFilter, Paging, Scrolling, Selection } from 'devextreme-react/data-grid';
import React from 'react';
import styled from 'styled-components';
import { Context } from '../../services/Contex';
import * as Entities from '../../services/entities';
import Styles from './styles';

interface IIconeProps {}

const BarraComando = styled.div`
  height: 0px;
`;

const Grid = styled.div`
  flex: 1;
  display: flex;
  min-height: 0px;
`;

const Icone: React.FC<IIconeProps> = props => {
  const dataSource = new Context().Icone;
  const colunas = Entities.Entity.obterColunas(Entities.Icone);

  return (
    <Styles>
      <BarraComando></BarraComando>
      <Grid>
        <DataGrid
          width="100%"
          height="100%"
          showBorders={true}
          dataSource={dataSource}
          allowColumnResizing={true}
          columnResizingMode="widget"
          onToolbarPreparing={e => {
            e.toolbarOptions?.items?.push(
              {
                location: 'before',
                template: 'busca'
              },
              {
                location: 'before',
                template: 'filtro'
              },
              {
                location: 'before',
                widget: 'dxButton',
                options: {
                  icon: 'plus',
                  text: 'Adicionar'
                }
              },
              {
                location: 'before',
                widget: 'dxButton',
                options: {
                  icon: 'edit',
                  text: 'Editar'
                }
              },
              {
                location: 'before',
                widget: 'dxButton',
                options: {
                  icon: 'copy',
                  text: 'Duplicar'
                }
              },
              {
                location: 'before',
                widget: 'dxButton',
                options: {
                  icon: 'trash',
                  text: 'Remover'
                }
              }
            );
          }}
        >
          <Scrolling mode="infinite" useNative={true} />
          <Paging defaultPageSize={20} />
          <Selection
            mode="multiple"
            selectAllMode="allPages"
            showCheckBoxesMode="onClick"
          />
          <FilterPanel visible={true} />
          <HeaderFilter visible={true} />

          {colunas.map(coluna => (
            <Column
              key={coluna.propriedade}
              caption={coluna.etiqueta}
              format={coluna.formatacao}
              cellComponent={coluna.componente}
              dataField={pascalCase(coluna.propriedade)}
              dataType={coluna.tipo}
              alignment={coluna.alinhamento}
                
            />
          ))}
          <Template name="busca" render={() => <div>localizar</div>} />
          <Template name="filtro" render={() => <div>filtro</div>} />
        </DataGrid>
      </Grid>
    </Styles>
  );
};

export default Icone;
