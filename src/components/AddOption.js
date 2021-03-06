import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component {
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

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && (
          <div className="add-option-error">
            <p class="add-option-error__text">{this.state.error}</p>
          </div>
        )}
        <form
          onSubmit={this.handleAddOption}
          className="add-option"
        >
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
