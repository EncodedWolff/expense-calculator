import React from "react";

export default function Results(props) {
  if (props.numberOfPeople > 1) {
    return (
      <div>
        <h1>Here are your results!</h1>
        <h3>
          You are splitting your expenses between {props.numberOfPeople} people
        </h3>
        <p>Yearly Expense Total: ${props.totals[0].toFixed(2)}</p>
        <p>Monthly Expense Total: ${props.totals[1].toFixed(2)}</p>
        <p>Weekly Expense Total: ${props.totals[2].toFixed(2)}</p>
        <p>Personal Weekly Expense Total: ${props.totals[3].toFixed(2)}</p>
        <p>Hourly Expense Total: ${props.totals[4].toFixed(2)}</p>
        <p>Personal Hourly Expense Total: ${props.totals[5].toFixed(2)}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Here are your results!</h1>
        <p>Yearly Expense Total: ${props.totals[0].toFixed(2)}</p>
        <p>Monthly Expense Total: ${props.totals[1].toFixed(2)}</p>
        <p>Weekly Expense Total: ${props.totals[2].toFixed(2)}</p>
        <p>Hourly Expense Total: ${props.totals[4].toFixed(2)}</p>
      </div>
    );
  }
}
