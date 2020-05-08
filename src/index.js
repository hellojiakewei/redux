import React from 'react';
import ReactDOM from 'react-dom'; 
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log('123')
console.log('34567')
console.log('123456789')
console.log('test分支更新')
console.log('master检出分支')
console.log('master检出分支本地修改')