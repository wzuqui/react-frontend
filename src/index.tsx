import { initializeIcons } from '@uifabric/icons';
import { setIconOptions } from '@uifabric/styling';
import 'devextreme/dist/css/dx.common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadMessages, locale } from 'devextreme/localization';
import messagesPT from './devextreme/pt.json';
import App from './App';

initializeIcons(undefined, {
  disableWarnings: true
});
setIconOptions({
  disableWarnings: true
});

loadMessages(messagesPT);
locale('pt-BR');

ReactDOM.render(<App />, document.getElementById('root'));
