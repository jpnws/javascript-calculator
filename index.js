class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "0",
    };
    this.handleClick = this.handleClick.bind(this);
    this.parseFormula = this.parseFormula.bind(this);
    this.isInitialZero = this.isInitialZero.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "clear") {
      this.setState({
        displayState: "0",
      });
    } else if (event.target.textContent === "=") {
      this.parseFormula();
    } else if (event.target.textContent === ".") {
      let dtxt = this.state.displayState;
      let reg = /[*/+-]/g;
      let res = dtxt.split(reg);
      if (res.length > 1) {
        if (res[res.length - 1].indexOf(".") === -1) {
          this.setState({
            displayState: dtxt + event.target.textContent,
          });
        }
      } else if (dtxt.indexOf(".") === -1) {
        this.setState({
          displayState: dtxt + event.target.textContent,
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
    let res = formula.match(reg);
    if (res !== null) {
      res = res[0];
      if (res[res.length - 1] !== "-") {
        let op = res[res.length - 1];
        formula = formula.replace(res, op);
        this.setState({
          displayState: eval(formula),
        });
      } else {
        let op = res[res.length - 2];
        formula = formula.replace(res.slice(0, res.length - 1), op);
        this.setState({
          displayState: eval(formula),
        });
      }
    } else {
      this.setState({
        displayState: eval(formula),
      });
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
        <div className="display-box" id="display">
          {this.state.displayState}
        </div>
        <div className="calc-pad">
          <button className="num-btn" id="zero" onClick={this.handleClick}>
            0
          </button>
          <button className="num-btn" id="one" onClick={this.handleClick}>
            1
          </button>
          <button className="num-btn" id="two" onClick={this.handleClick}>
            2
          </button>
          <button className="num-btn" id="three" onClick={this.handleClick}>
            3
          </button>
          <button className="num-btn" id="four" onClick={this.handleClick}>
            4
          </button>
          <button className="num-btn" id="five" onClick={this.handleClick}>
            5
          </button>
          <button className="num-btn" id="six" onClick={this.handleClick}>
            6
          </button>
          <button className="num-btn" id="seven" onClick={this.handleClick}>
            7
          </button>
          <button className="num-btn" id="eight" onClick={this.handleClick}>
            8
          </button>
          <button className="num-btn" id="nine" onClick={this.handleClick}>
            9
          </button>
          <button className="op-btn" id="add" onClick={this.handleClick}>
            +
          </button>
          <button className="op-btn" id="subtract" onClick={this.handleClick}>
            -
          </button>
          <button className="op-btn" id="multiply" onClick={this.handleClick}>
            *
          </button>
          <button className="op-btn" id="divide" onClick={this.handleClick}>
            /
          </button>
          <button className="dot-btn" id="decimal" onClick={this.handleClick}>
            .
          </button>
          <button className="clr-btn" id="clear" onClick={this.handleClick}>
            Clear
          </button>
          <button className="eval-btn" id="equals" onClick={this.handleClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("javascript-calculator"));
