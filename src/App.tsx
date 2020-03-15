import themes from 'devextreme/ui/themes';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Cabecalho from './components/Cabecalho';
import Carregando from './components/Carregando';
import usePersistedState from './hooks/usePersistedState';
import NovaAba from './pages/NovaAba';
import { Menu } from './services/Menu';
import { GlobalStyles } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

interface IAppProps {}

const AppContainer = styled.div`
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: auto;
  grid-template-rows: 30px 100%;
  grid-template-areas: 'cabecalho' 'pagina';
`;

const AppCabecalho = styled.div`
  grid-area: cabecalho;
`;
const AppPagina = styled.div`
  grid-area: pagina;
`;

const App: React.FC<IAppProps> = props => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.titulo === 'light' ? dark : light);
  };

  if (theme) {
    if (theme.titulo === 'light') {
      themes.current('generic.light');
    } else {
      themes.current('generic.dark');
    }
  }

  const lazy = (arquivo: string) => {
    return React.lazy(() =>
      new Promise(resolve => {
        setTimeout(resolve, 0); // definir tempo quando quiser editar o carregando
      }).then(() => import(`${arquivo}`))
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppContainer>
          <AppCabecalho>
            <Cabecalho toggleTheme={toggleTheme} />
          </AppCabecalho>
          <AppPagina>
            <Suspense fallback={<Carregando />}>
              <Switch>
                <Route exact path="/">
                  <NovaAba />
                </Route>
                {Menu.obterLista().map(menu => {
                  const Page = lazy('./pages/' + menu.pasta);
                  return (
                    <Route key={menu.rota} path={`/${menu.rota}`}>
                      <Page></Page>
                    </Route>
                  );
                })}
              </Switch>
            </Suspense>
          </AppPagina>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
