import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

const TYPE_HINDI = "hindi";
const TYPE_ENGLISH = "english"

//action
const hindiMovieAction = ()=>{
  return {
    type : TYPE_HINDI
  }
}
const englishMovieAction = ()=>{
  return {
    type : TYPE_ENGLISH
  }
}

//reducer
const movieReducer = (store, action)=>{
  switch(action.type){
    case TYPE_ENGLISH:
      return store = "venom"
    case TYPE_HINDI:
      return store = "3 idots" 
     default:
       return store = "no movie selected"  
  }
}
//store
const store = createStore(movieReducer);
store.subscribe(()=>{
  console.log(store.getState())
})
//dispatch
store.dispatch(hindiMovieAction())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
