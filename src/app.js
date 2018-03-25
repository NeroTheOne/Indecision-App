import React from 'react';
import ReactDOM from 'react-dom';
import IndesicionApp from './components/IndecisionApp';
import 'normalize-css/normalize.css';
import './style/style.scss';

ReactDOM.render(<IndesicionApp />, document.getElementById('app'));


// --------- NON-COMPONENT ------------

//
// const appRoot = document.getElementById('app');
//
// const user = {
//   name: 'Nero',
//   subtitle: "He is the one",
//   age: '20',
//   options: []
// };
//
// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if (option) {
//     user.options.push(option);
//     e.target.elements.option.value = '';
//     renderApp();
//   }
// };
//
// const onRemoveAll = (e) => {
//   e.preventDefault();
//   user.options = [];
//   renderApp();
// }
//
// const onMakeDecesion = () => {
//   const random = Math.floor(Math.random() * user.options.length);
//   console.log(random);
//   alert(user.options[random]);
// };
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{user.name ? user.name : "Anonymous"}</h1>
//       {user.subtitle && <p>{user.subtitle}</p>}
//       {user.age >= 18 && <p>Age: {user.age}</p>}
//       <ol>
//         {
//           user.options.map((option) => <li key={option}>{option}</li>)
//         }
//       </ol>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button type="submit">Add option</button>
//       </form>
//       <button disabled={user.options.length == 0} onClick={onMakeDecesion}>What should I do?</button>
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// renderApp();
