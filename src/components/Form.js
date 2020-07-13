import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      numberOfPeople: 1,
      hoursPerWeek: 40,
    };
  }

  handleSubmit() {
    this.setState({
      expenses: this.state.expenses,
      numberOfPeople: null, //set this using the "people" input
      hoursPerWeek: null, //set this using the "hours" input
    });
  }

  handleInputChange(e, index) {
    this.state.expenses[index] = e.target.value;
    this.setState({ expenses: this.state.expenses });
    console.log(this.state.expenses);
  }

  addNewExpense = () => {
    this.setState({ expenses: [...this.state.expenses, null] });
  };

  removeExpense(index) {
    this.state.expenses.splice(index, 1);
    this.setState({ expenses: this.state.expenses });
  }

  render() {
    return (
      <div>
        <h3>Use the form below to calculate your cost of living.</h3>
        <label>Number of people splitting expenses</label>
        <input type="number" placeholder="ex. 2" name="people" />
        <label>Number of hour each person works per week</label>
        <input type="number" placeholder="ex. 40" name="hours" />

        <label>Expenses</label>
        {this.state.expenses.map((expense, index) => {
          return (
            <div key={index}>
              <input
                onChange={(e) => this.handleInputChange(e, index)}
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
        <button>Submit</button>
      </div>
    );
  }
}
