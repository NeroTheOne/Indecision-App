'use strict';

//
// const user = {
//   name: 'Nero',
//   subtitle: "He is the one",
//   age: '20',
//   options: []
// };
//
// const template = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.subtitle && <p>{user.subtitle}</p>}
//     {user.age >= 18 && <p>Age: {user.age}</p>}
//     <p>{user.options.length > 0 ? "Here are your options" : "No options"}</p>
//   </div>
// );
//
// const appRoot = document.getElementById('app');
//
// ReactDOM.render(template, appRoot);
var addOne = function addOne() {
  console.log('addOne');
  count += 1;
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var count = 0;
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Counts: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    '-reset'
  )
);

console.log('template:', template);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
