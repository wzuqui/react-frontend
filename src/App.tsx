import themes from 'devextreme/ui/themes';
import { loadTheme } from 'office-ui-fabric-react';
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

const Cabecalhos = styled.div`
  height: 30px;
`;

const Paginas = styled.div`
  flex: 1;
  display: flex;
  min-height: 0px;
`;

const Pagina = styled.div`
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC<IAppProps> = props => {
  const [theme, setTheme] = usePersistedState('theme', light.titulo);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? dark.titulo : light.titulo);
  };

  if (theme) {
    if (theme === 'light') {
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

  const style = theme === 'light' ? light : dark;

  loadTheme({
    defaultFontStyle: {
      fontSize: '12px'
    },
    
    palette: style.cores
  });

  return (
    <ThemeProvider theme={style}>
      <Router>
        <GlobalStyles />
        <Cabecalhos>
          <Cabecalho toggleTheme={toggleTheme} />
        </Cabecalhos>
        <Paginas>
          <Pagina>
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
          </Pagina>
        </Paginas>
      </Router>
    </ThemeProvider>
  );
};

export default App;
