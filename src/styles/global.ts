import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body , html {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    overflow: hidden;
    color: ${props => props.theme.cores.neutralPrimary};
    background-color: ${props => props.theme.cores.white};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .dx-datagrid-header-panel .dx-toolbar {
    margin-bottom: 0px;
  }
  .dx-datagrid-search-panel {
    margin-left: 0px;
  }
  .dx-rtl.dx-toolbar .dx-toolbar-menu-container, .dx-toolbar .dx-toolbar-item {
    padding-right: 0px;
  }
  .dx-toolbar {
    background-color: ${props => props.theme.cores.toolbar.background}
  }
  .dx-toolbar .dx-button-mode-contained {
    border: none;
    background-color: transparent;
    &:hover {
      background-color: ${props => props.theme.cores.toolbar.button.hover};
    }
  }
  .dx-button-mode-contained .dx-icon {
    color: ${props => props.theme.cores.themePrimary};
  }
  .dx-datagrid.dx-datagrid-borders > .dx-datagrid-header-panel {
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
  }
  .dx-loadpanel-content {
    background-color: ${props => props.theme.cores.white};
  }
`;
