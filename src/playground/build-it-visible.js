class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Build it Visible</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility && (
          <p>These are the details. Wubulabadubdub.</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
