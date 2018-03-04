'use strict';

var appRoot = document.getElementById('app');

var user = {
  name: 'Nero',
  subtitle: "He is the one",
  age: '20',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    user.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var onRemoveAll = function onRemoveAll(e) {
  e.preventDefault();
  user.options = [];
  renderApp();
};

var onMakeDecesion = function onMakeDecesion() {
  var random = Math.floor(Math.random() * user.options.length);
  console.log(random);
  alert(user.options[random]);
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      user.name ? user.name : "Anonymous"
    ),
    user.subtitle && React.createElement(
      'p',
      null,
      user.subtitle
    ),
    user.age >= 18 && React.createElement(
      'p',
      null,
      'Age: ',
      user.age
    ),
    React.createElement(
      'ol',
      null,
      user.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add option'
      )
    ),
    React.createElement(
      'button',
      { disabled: user.options.length == 0, onClick: onMakeDecesion },
      'What should I do?'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
