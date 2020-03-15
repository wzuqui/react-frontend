import { initializeIcons } from '@uifabric/icons';
import { setIconOptions } from '@uifabric/styling';

import 'devextreme/dist/css/dx.common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

initializeIcons(undefined, {
  disableWarnings: true
});
setIconOptions({
  disableWarnings: true
});

ReactDOM.render(<App />, document.getElementById('root'));
