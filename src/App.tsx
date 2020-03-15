/* eslint-disable jsx-a11y/accessible-emoji */
import themes from 'devextreme/ui/themes';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Cabecalho from './components/Cabecalho';
import usePersistedState from './hooks/usePersistedState';
import NovaAba from './pages/NovaAba';
import { Menu } from './services/Menu';
import { GlobalStyles } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

interface IAppProps {}

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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Cabecalho toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/">
            <NovaAba />
          </Route>
          {Menu.obterLista().map(menu => {
            const Page = React.lazy(() => import('./pages/' + menu.pasta));
            return (
              <Route key={menu.rota} path={`/${menu.rota}`}>
                <Page></Page>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
