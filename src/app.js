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
const addOne = () => {
  console.log('addOne');
  count += 1;
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

let count = 0;
const template = (
  <div>
    <h1>Counts: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>-reset</button>
  </div>
);

console.log('template:', template);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
