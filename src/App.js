import React from "react";

import Results from "./components/Results";
import Calculator from "./components/Calculator";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      totals: [],
      numberOfPeople: 1,
      hoursPerWeek: 40,
      submit: false,
    };

    // this.onSubmit = this.onSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      expenses: this.state.expenses,
      totals: Calculator(this.state),
      numberOfPeople: this.state.numberOfPeople, //set this using the "people" input
      hoursPerWeek: this.state.hoursPerWeek, //set this using the "hours" input
      submit: true,
    });
  };

  handleHoursPerWeekChage(e) {
    this.state.hoursPerWeek = e.target.value;
    this.setState({ hoursPerWeek: this.state.hoursPerWeek });
  }

  handleNumberOfPeopleChange(e) {
    this.state.numberOfPeople = e.target.value;
    this.setState({ numberOfPeople: this.state.numberOfPeople });
  }

  handleExpenseChange(e, index) {
    this.state.expenses[index] = e.target.value;
    this.setState({ expenses: this.state.expenses });
    console.log(this.state.expenses);
  }

  addNewExpense = (event) => {
    event.preventDefault();
    this.setState({ expenses: [...this.state.expenses, ""] });
  };

  removeExpense(index) {
    this.state.expenses.splice(index, 1);
    this.setState({ expenses: this.state.expenses });
  }

  render() {
    if (!this.state.submit) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>Use the form below to calculate your cost of living.</h3>
            <div>
              <label>Number of people splitting expenses</label>
              <input
                onChange={(e) => this.handleNumberOfPeopleChange(e)}
                type="number"
                placeholder="ex. 2"
                name="people"
                value={this.state.numberOfPeople}
              />
            </div>
            <div>
              <label>Number of hour each person works per week</label>
              <input
                onChange={(e) => this.handleHoursPerWeekChage(e)}
                type="number"
                placeholder="ex. 40"
                name="hours"
                value={this.state.hoursPerWeek}
              />
            </div>

            <label>Expenses</label>
            {this.state.expenses.map((expense, index) => {
              return (
                <div key={index}>
                  <input
                    type="number"
                    onChange={(e) => this.handleExpenseChange(e, index)}
                    value={expense}
                    placeholder="0.00"
                  />
                  <button onClick={() => this.removeExpense(index)}>
                    Remove Expense
                  </button>
                </div>
              );
            })}
            <button onClick={(e) => this.addNewExpense(e)}>Add Expense</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    // //This will render a result page when submit === true
    return (
      <div>
        <Results
          numberOfPeople={this.state.numberOfPeople}
          totals={this.state.totals}
        />
      </div>
    );
  }
}
