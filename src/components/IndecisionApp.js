import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndesicionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOption = (optionToRemove) => {
    console.log('fired handleDeleteOption');
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  }

  handlePick = () => {
    let random = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[random]
    }));
    console.log('TEST:', this.state.selectedOption);
  }

  handleAddOption = (option) => {
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

  handleClearSelectedOption = () => {
    console.log('fired handleDelSlctdOption');
    this.setState(() => ({
      selectedOption: undefined
    }));
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


  render() {
    return (
      <div>
        <Header/>
        <div class="container">
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
        <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  };
};
