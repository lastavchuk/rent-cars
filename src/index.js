import React from 'react';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/rent-cars">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
