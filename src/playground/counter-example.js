class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count ) {
      console.log('componentDidUpdate');
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleMinus}>-</button>
      </div>
    );
  };
}


ReactDOM.render(<Counter count={100000}/>, document.getElementById('app'));
