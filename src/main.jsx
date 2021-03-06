

import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// Onsen UI Styling and Icons
// require('onsenui/css-components-src/src/onsen-css-components.css');
// require('onsenui/css/onsenui.css');


import App from './App';


require(['./Locale'],()=>{
    const rootElement = document.getElementById('app');
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        rootElement
    );

// const rootElement1= document.getElementById('drawer');
// ReactDOM.render(
//   <AppContainer>
//     <Drawer />
//   </AppContainer>,
//   rootElement1
// );

    if (module.hot) {
        module.hot.accept('./App', () => {
            const NextApp = require('./App').default;
            ReactDOM.render(
                <AppContainer>
                    <NextApp />
                </AppContainer>,
                rootElement
            );
        });
    }
});

