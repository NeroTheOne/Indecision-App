class IndesicionApp extends React.Component {
  render() {
    let options = ['Thing one', 'Thing two'];
    return (
      <div>
        <Header/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    );
  };
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indesicion App</h1>
        <p>Put your life in the hands of a computer</p>
      </div>
    );
  };
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionTest={option}/>)}
      </div>
    );
  };
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionTest}</p>
      </div>
    );
  };
}

class AddOption extends React.Component {
  handleAddOption(e) {
    let text = e.target.elements.option.value.trim();
    e.preventDefault();
    if (text) {
      alert(text);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndesicionApp/>, appRoot)


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
