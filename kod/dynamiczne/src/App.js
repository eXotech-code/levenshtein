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

const TableRow = (props) => {
  let cells = props.children[0];
  let cellsWithIndices = [];

  for (const [index, cell] of cells.entries()) {
    cellsWithIndices.push([cell, index]);
  }

  return (
    <tr key={props.children[1]}>
      {cellsWithIndices.map((cell) => (
        <td key={cell[1]}>{cell[0]}</td>
      ))}
    </tr>
  )
}

const TabularResult = (props) => {

  return (
    <div className={"table-holder"}>
      <p>Matryca odległości:</p>
      <table>
        <tbody>
          {props.children.map((row) => (
            <TableRow key={row[1]}>{row}</TableRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      string1: '',
      string2: '',
      result: 0,
      resultTable: null
    }

    // To get rid of the 'this is undefined' errors.
    this.handleChange = this.handleChange.bind(this);
    this.compareDistance = this.compareDistance.bind(this);
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

  compileResultTable(arr) {
    let res = [];

    for (const [index, row] of arr.entries()) {
      res[index] = [row, index];
    }

    return res;
  }

  /* Utitlity function for finding replace cost for
   * two chars at indexes 'i1' and 'i2'. */
  findCost(st1, st2, i1, i2) {
    // We reverse the value because replacing to different char costs 1.
    return st1[i1] === st2[i2] ? 0 : 1;
  }

  // Funkcja, która oblicza długość między dwoma ciągami znaków.
  compareDistance() {
    const st1 = this.state.string1;
    const st2 = this.state.string2;

    /* Jeżeli ciąg pierwszy jest pusty,
     * to odległość między słowami wynosi
     * długość słowa drugiego. */
    if (!st1.length) {
      this.setState.result({result: st2.length, resultTable: null})
    };
    /* Jeżeli ciąg drugi jest pusty,
     * to odległość między słowami wynosi
     * długość słowa pierwszego. */
    if (!st2.length) {
      this.setState.result({result: st1.length, resultTable: null})
    };

    /* Matryca reprezentująca odległości między coraz to większymi
     * ciągami znaków. */
    let minCostMatrix = new Array(st1.length);
    for (let i = 0; i < minCostMatrix.length; i++) {
      minCostMatrix[i] = new Array(st2.length).fill(0);
    }

    // Odległość początkowa - koszt zamiany ostatniego znaku w obu słowach.
    minCostMatrix[st1.length - 1][st2.length - 1] = this.findCost(st1, st2, st1.length - 1, st2.length - 1);

    for (let j = st2.length - 2; j >= 0; j--) {
      minCostMatrix[st1.length - 1][j] = 1 + minCostMatrix[st1.length - 1][j + 1];
    }

    for (let i = st1.length - 2; i >= 0; i--) {
      minCostMatrix[i][st2.length - 1] = 1 + minCostMatrix[i + 1][st2.length - 1];
    }

    for (let i = st1.length - 2; i >= 0; i--) {
      for (let j = st2.length - 2; j >= 0; j--) {
        /* Koszt zamiany znaków znajdujących się na skrzyżowaniu
         * indeksów i oraz j + koszt zamiany wszystkich poprzednich
         * znaków aż do tego momentu. */
        let replace = this.findCost(st1, st2, i, j) + minCostMatrix[i + 1][j + 1];
        // Koszt usunięcia jednego znaku.
        let del = 1 + minCostMatrix[i + 1][j];
        // Koszt wstawienia jednego znaku.
        let ins = 1 + minCostMatrix[i][j + 1];
        // Zapisanie kosztu minimalnego w matrycy.
        minCostMatrix[i][j] = Math.min(replace, del, ins);
      }
    }

    this.setState({
      result: minCostMatrix[0][0],
      resultTable: this.compileResultTable(minCostMatrix),
    });
  }

  render() {
    return (
      <div className={"App"}>
        <Form
          string1={this.state.string1}
          string2={this.state.string2}
          changeHandler={this.handleChange}
          buttonAction={this.compareDistance}
        />
        <div className={"result"}>
          <div className={"numerical-result"}>
            <p>Odległość między napisami wynosi:</p>
            <h1>{this.state.result}</h1>
          </div>
          {this.state.resultTable &&
            <TabularResult>{this.state.resultTable}</TabularResult>
          }
        </div>
      </div>
    );
  }
}

export default App;
