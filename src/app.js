class IndesicionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }
  handlePick() {
    let random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  };
};

IndesicionApp.defaultProps = {
  options: []
};

const Header = () => {
  return (
    <div>
      <h1>Indesicion App</h1>
      <p>Put your life in the hands of a computer</p>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => <Option key={option} option={option}/>)}
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error
    }));

    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && (
          <div>
            <p>{this.state.error}</p>
          </div>
        )}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndesicionApp />, appRoot)


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
