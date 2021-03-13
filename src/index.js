import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// when want to execute code globally (not locally)
// no matter which Http request is sent from which component
// need to do something when the request is sent or when the response is returned

// interceptors are functions you can define gloabally 
// which will be executed for every request leaving your app and every response returning into it
// useful for: setting some common headers like authorization headers or 
// for responses if you want to log responses or want to handle errors globally

// this is the most global file in the app
axios.interceptors.request.use(request => {
    console.log(request);
    // can also Edit the request config before you return it
    return request; // always need to return request, otherwise you are blocking the request
}, error => {
    // If request sending fails, it enters here （like no internet connectivity）
    console.log(error);
    // Forward it to the request, the can handle it with the catch mathod in the compoennt of that request
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response; 
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use();

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
