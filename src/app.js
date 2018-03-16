import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';
import Action from './components/Action';

class IndesicionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      console.log('fetching data');
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ options }));
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log('saving data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOption(optionToRemove) {
    console.log('fired handleDeleteOption');
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  };
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length == 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
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
