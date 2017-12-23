import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import base,{auth,providers} from './base'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
    <App base={base} auth={auth} providers={providers} />, 
    document.getElementById('root'));
registerServiceWorker();
