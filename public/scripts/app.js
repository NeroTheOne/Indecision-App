'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndesicionApp = function (_React$Component) {
  _inherits(IndesicionApp, _React$Component);

  function IndesicionApp(props) {
    _classCallCheck(this, IndesicionApp);

    var _this = _possibleConstructorReturn(this, (IndesicionApp.__proto__ || Object.getPrototypeOf(IndesicionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndesicionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[random]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter a valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exist';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasOptions: this.state.options.length,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndesicionApp;
}(React.Component);

;

IndesicionApp.defaultProps = {
  options: []
};

var Header = function Header() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Indesicion App'
    ),
    React.createElement(
      'p',
      null,
      'Put your life in the hands of a computer'
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, option: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.option
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });

      e.target.elements.option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            this.state.error
          )
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndesicionApp, null), appRoot);

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
