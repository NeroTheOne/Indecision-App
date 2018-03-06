let details = "This are the details.";
let details_visible = false;

let onToggleDetails = (e) => {
  details_visible = !details_visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visible Toggle</h1>
      <button onClick={onToggleDetails}>
        {details_visible ? "Hide details" : "Show details"}
      </button>
      {details_visible && (
        <div>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
