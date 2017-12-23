import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import base,{auth} from './base'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
    <App base={base} auth={auth} />, 
    document.getElementById('root'));
registerServiceWorker();
