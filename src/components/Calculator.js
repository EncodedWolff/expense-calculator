export default function Calculator(props) {
  // let expenses = props.expenses;
  let numberOfPeople = props.numberOfPeople;
  let hoursPerWeek = props.hoursPerWeek;
  const months = 12;
  const weeks = 52;

  console.log(props);

  function calculateMonthlyCostOfLiving(expenses) {
    let monthlyCostOfLiving = 0.0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i] === null) {
        expenses[i] = 0;
        monthlyCostOfLiving += parseFloat(expenses[i]);
      } else {
        monthlyCostOfLiving += parseFloat(expenses[i]);
      }
    }
    return monthlyCostOfLiving;
  }

  let monthlyCostOfLiving = calculateMonthlyCostOfLiving(props.expenses);
  let yearlyCostOfLiving = monthlyCostOfLiving * months;
  let totalWeeklyCostOfLiving = yearlyCostOfLiving / weeks;
  let weeklyCostOfLivingPerPerson = totalWeeklyCostOfLiving / numberOfPeople;
  let totalHourlyCostOfLiving = totalWeeklyCostOfLiving / hoursPerWeek;
  let hourlyCostOfLivingPerPerson = totalHourlyCostOfLiving / numberOfPeople;

  return [
    yearlyCostOfLiving,
    monthlyCostOfLiving,
    totalWeeklyCostOfLiving,
    weeklyCostOfLivingPerPerson,
    totalHourlyCostOfLiving,
    hourlyCostOfLivingPerPerson,
  ];
}
