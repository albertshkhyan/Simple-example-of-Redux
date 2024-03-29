import React from 'react';
import {createStore} from 'redux';


const reducer = (state = 0, action) =>{
  console.log('action', action);
  switch(action.type) {
    case 'INC' : 
          return state  + 1;
    case 'DEC' : 
          return state - 1;
          default : return state;
  }
}
const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch( {type : 'INC'} )
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch( {type : 'DEC'} )
});



let update = () => {
  document.getElementById('counter').innerHTML = store.getState();
}
store.subscribe(update);
