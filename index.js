class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (event.target.id === "clear") {
      this.setState({
        displayState: "",
      });
    } else {
      this.setState({
        displayState: this.state.displayState + event.target.textContent,
      });
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
          ×
        </button>
        <button id="divide" onClick={this.handleClick}>
          ÷
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
        <div id="display" onClick={this.handleClick}>
          {this.state.displayState}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("javascript-calculator"));
