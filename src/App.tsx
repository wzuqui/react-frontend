/* eslint-disable jsx-a11y/accessible-emoji */
import themes from 'devextreme/ui/themes';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Cabecalho from './components/Cabecalho';
import NovaAba from './pages/NovaAba';
import { GlobalStyles } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './hooks/usePersistedState';

function App() {
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
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
