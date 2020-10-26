import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import nameReducer from './reducers/nameReducer';
import thunk from 'redux-thunk';
import wishReducer from './reducers/wishReducer';
const masteRreducer=combineReducers({
  name:nameReducer,
  wish:wishReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(masteRreducer,{name:'usama',wish:['eat','sleep']},composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}> <App /></Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
