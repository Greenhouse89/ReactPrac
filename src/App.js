import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 26.24,
        date: new Date(2021, 7, 16),
      },
      {
        id: 'e2',
        title: 'Car Insurance',
        amount: 219.06,
        date: new Date(2021, 7, 1),
      },
      {
        id: 'e3',
        title: 'TV',
        amount: 119.21,
        date: new Date(2021, 7, 16),
      },
      {
        id: 'e4',
        title: 'Mortgage',
        amount: 1952.16,
        date: new Date(2021, 7, 1),
      },

    ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem title= {expenses[0].title} amount= {expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title ={expenses[1].title} amount= {expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title ={expenses[2].title} amount= {expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title ={expenses[3].title} amount= {expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
