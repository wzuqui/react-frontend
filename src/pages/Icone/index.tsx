import DataGrid, {
  Column,
  FilterPanel,
  HeaderFilter,
  Paging,
  Scrolling,
  Selection
} from 'devextreme-react/data-grid';
import React from 'react';
import styled from 'styled-components';
import Imagem from '../../components/Imagem';
import { DataGridOptions } from '../../services/DataGridOptions';
import * as Entities from '../../services/entities';
import Styles from './styles';

const BarraComando = styled.div`
  height: 0px;
`;

const Grid = styled.div`
  flex: 1;
  display: flex;
  min-height: 0px;
`;

interface IIconeProps {}

const Icone: React.FC<IIconeProps> = props => {
  const datagrid = new DataGridOptions(Entities.Icone).Columns(columns => {
    columns.AddFor(c => c.nome);

    columns
      .AddFor(c => c.imagem)
      .Alignment('center')
      .CellComponent(Imagem)
      .AllowFiltering(false);

    columns
      .AddFor(c => c.criadoPor)
      .Alignment('center')
      .Caption('Criado por')
      .Lookup(Entities.Entidade, 'icone', 'apelido');

    columns
      .AddFor(c => c.criadoDatahora)
      .Caption('Criado no servidor')
      .Format('dd/MM/yyyy HH:mm:ss')
      .DataType('datetime');

    columns
      .AddFor(c => c.modificadoDatahora)
      .Caption('Modificado em')
      .Format('dd/MM/yyyy HH:mm:ss')
      .DataType('datetime');

    columns.AddFor(c => c.id).Caption('Identificação');
  });

  return (
    <Styles>
      <BarraComando></BarraComando>
      {datagrid && (
        <Grid>
          <DataGrid
            width="100%"
            height="100%"
            showBorders={true}
            dataSource={datagrid?.dataSource}
            allowColumnResizing={true}
            columnResizingMode="widget"
            onToolbarPreparing={e => {
              e.toolbarOptions?.items?.push(
                {
                  location: 'before',
                  widget: 'dxButton',
                  options: {
                    icon: 'search'
                  }
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

            {datagrid?.columns?.map(coluna => (
              <Column
                key={coluna.dataField}
                alignment={coluna.aligment}
                allowFiltering={coluna.allowFiltering}
                caption={coluna.caption}
                cellComponent={coluna.cellComponent}
                dataField={coluna.dataField}
                dataType={coluna.dataType}
                format={coluna.format}
                lookup={coluna.lookup}
              />
            ))}
          </DataGrid>
        </Grid>
      )}
    </Styles>
  );
};

export default Icone;
