"use strict";

var details = "This are the details.";
var details_visible = false;

var onToggleDetails = function onToggleDetails(e) {
  details_visible = !details_visible;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visible Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onToggleDetails },
      details_visible ? "Hide details" : "Show details"
    ),
    details_visible && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        details
      )
    )
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
