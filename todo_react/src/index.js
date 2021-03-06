import React from 'react';
import './index.css';
import {createRoot} from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);

export let renderEntireTree = () =>{
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}

store.subscribe(()=>renderEntireTree());
renderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
