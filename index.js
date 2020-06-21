class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.parseFormula = this.parseFormula.bind(this);
    this.isInitialZero = this.isInitialZero.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "clear") {
      this.setState({
        displayState: 0,
      });
    } else if (event.target.textContent === "=") {
      this.parseFormula();
    } else if (event.target.textContent === ".") {
      if (this.state.displayState.indexOf(".") === -1) {
        this.setState({
          displayState: this.state.displayState + event.target.textContent,
        });
      }
    } else if (event.target.textContent === "0") {
      if (!this.isInitialZero()) {
        this.setState({
          displayState: this.state.displayState + event.target.textContent,
        });
      }
    } else if (
      this.state.displayState.length === 1 &&
      this.state.displayState === "0"
    ) {
      this.setState({
        displayState: event.target.textContent,
      });
    } else {
      this.setState({
        displayState: this.state.displayState + event.target.textContent,
      });
    }
  }

  parseFormula() {
    let formula = this.state.displayState;
    let reg = /[*/+-]{2,}/g;
    let res = formula.match(reg)[0];
    if (res[res.length - 1] !== "-") {
      let op = res[res.length - 1];
      formula = formula.replace(res, op);
      console.log(eval(formula));
    } else {
      let op = res[res.length - 2];
      formula = formula.replace(res.slice(0, res.length - 1), op);
      console.log(eval(formula));
    }
  }

  isInitialZero() {
    if (this.state.displayState.length === 1) {
      return this.state.displayState[0] === "0";
    }
  }

  render() {
    return (
      <div className="calc-container">
        <button id="zero" onClick={this.handleClick}>
          0
        </button>
        <button id="one" onClick={this.handleClick}>
          1
        </button>
        <button id="two" onClick={this.handleClick}>
          2
        </button>
        <button id="three" onClick={this.handleClick}>
          3
        </button>
        <button id="four" onClick={this.handleClick}>
          4
        </button>
        <button id="five" onClick={this.handleClick}>
          5
        </button>
        <button id="six" onClick={this.handleClick}>
          6
        </button>
        <button id="seven" onClick={this.handleClick}>
          7
        </button>
        <button id="eight" onClick={this.handleClick}>
          8
        </button>
        <button id="nine" onClick={this.handleClick}>
          9
        </button>
        <button id="add" onClick={this.handleClick}>
          +
        </button>
        <button id="subtract" onClick={this.handleClick}>
          -
        </button>
        <button id="multiply" onClick={this.handleClick}>
          *
        </button>
        <button id="divide" onClick={this.handleClick}>
          /
        </button>
        <button id="equals" onClick={this.handleClick}>
          =
        </button>
        <button id="decimal" onClick={this.handleClick}>
          .
        </button>
        <button id="clear" onClick={this.handleClick}>
          clear
        </button>
        <div id="display">{this.state.displayState}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("javascript-calculator"));
