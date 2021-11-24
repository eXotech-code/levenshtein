import React from "react";
import Button from "./components/Button";
import {ReactComponent as RightArrow} from './media/arrow-right.svg'
import './App.scss';

const Input = (props) => {
    return (
        <div>
            <label>
                {props.name}
                <input
                    type={"text"}
                    value={props.value}
                    onChange={props.handler}
                    name={props.name.toLowerCase()}
                    placeholder={props.placeholder}
                />
            </label>
        </div>
    )
}

const Form = (props) => {
        return (
                <div className="form">

                    <div className="name-section">
                        <h1>Levenshteino-inator</h1>
                        <h3>(naiwna wersja rekursywna)</h3>
                        <p>Wyznacz odległości między dwoma napisami</p>
                    </div>

                    <div className="input-area">
                        <Input
                            name="Napis 1"
                            value={props.string1}
                            handler={props.changeHandler}
                            placeholder="Wymyśl coś ciekawego"
                        />
                        <Input
                            name="Napis 2"
                            value={props.string2}
                            handler={props.changeHandler}
                            placeholder="Napis do porównania"
                        />
                    </div>

                    <div className="login-form-button-area">
                        <Button action={props.buttonAction}>
                            Porównaj
                            <RightArrow />
                        </Button>
                    </div>
                </div>
        )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      string1: '',
      string2: '',
      result: 0
    }

    // To get rid of the 'this is undefined' errors.
    this.handleChange = this.handleChange.bind(this);
    this.driverFunc = this.driverFunc.bind(this);
  }

  // Generates a dummy placeholder table on initial page load.
  tableGen() {
    let resTab = new Array(6);

    for (let i = 0; i <= resTab.length; i++) {
      resTab[i] = new Array(5);
    }

    return resTab;
  }

  // Handles change on input and saves it into state.
  handleChange(e) {
    /* Set state of username or password according to
     which field is being typed into. */

    if (e.target.name === 'napis 1') {
      this.setState({ string1: e.target.value });
    } else {
      this.setState({ string2: e.target.value });
    }
  }

  // Function that compares distance according to Levenshtein's method.
  /*
   * This is the naive recursive approach - a direct
   * implementation of definition of the Levenshtein
   * distance metric.
   */
  compareDistance(st1, st2) {
    // Resulting distance
    let d = 0;

    /* If the length of string 1 is 0, then the distance between strings
     * length of string 2. */
    if (st1.length === 0) {return st2.length}
    if (st2.length === 0) {return st1.length}

    /* If both strings start with the same char, call Levenshtein function
     * recursively but without the first character. */
    if (st1[0] === st2[0]) {
      d = this.compareDistance(st1.substring(1), st2.substring(1));
    } else {
      d = 1 + Math.min(
        this.compareDistance(st1.substring(1), st2), // Insertion
        this.compareDistance(st1, st2.substring(1)), // Deletion
        this.compareDistance(st1.substring(1), st2.substring(1)) // Substitution
      );
    }

    return d;
  }

  driverFunc() {
    this.setState({result: this.compareDistance(this.state.string1, this.state.string2)});
  }

  render() {
    return (
      <div className={"App"}>
        <Form
          string1={this.state.string1}
          string2={this.state.string2}
          changeHandler={this.handleChange}
          buttonAction={this.driverFunc}
        />
        <div className={"result"}>
          <div className={"numerical-result"}>
            <p>Odległość między napisami wynosi:</p>
            <h1>{this.state.result}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
