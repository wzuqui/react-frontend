import { initializeIcons } from '@uifabric/icons';
import { setIconOptions } from '@uifabric/styling';

import 'devextreme/dist/css/dx.common.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

initializeIcons(undefined, {
  disableWarnings: true
});
setIconOptions({
  disableWarnings: true
});

ReactDOM.render(
<Suspense fallback={<div>Carregando...</div>}>
  <App />
</Suspense>, document.getElementById('root'));
